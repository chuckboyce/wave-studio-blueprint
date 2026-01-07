import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GHL_API_KEY = Deno.env.get('GHL_API_KEY');
    const GHL_LOCATION_ID = Deno.env.get('GHL_LOCATION_ID');

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('Missing GHL_API_KEY or GHL_LOCATION_ID');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Submitting contact to GHL:', { name, email, phone: phone || 'not provided' });

    // Create or update contact in GoHighLevel
    const ghlResponse = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        name,
        email,
        phone: phone || undefined,
        tags: ['website-contact'],
        customFields: [],
        source: 'Website Contact Form',
      }),
    });

    const ghlData = await ghlResponse.json();
    console.log('GHL response status:', ghlResponse.status);
    console.log('GHL response:', JSON.stringify(ghlData));

    if (!ghlResponse.ok) {
      console.error('GHL API error:', ghlData);
      return new Response(
        JSON.stringify({ error: 'Failed to submit contact', details: ghlData }),
        { status: ghlResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Add a note with the message to the contact
    if (ghlData.contact?.id) {
      const noteResponse = await fetch(`https://services.leadconnectorhq.com/contacts/${ghlData.contact.id}/notes`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28',
        },
        body: JSON.stringify({
          body: `Website Contact Form Message:\n\n${message}`,
        }),
      });

      const noteData = await noteResponse.json();
      console.log('Note creation status:', noteResponse.status);
      console.log('Note response:', JSON.stringify(noteData));
    }

    return new Response(
      JSON.stringify({ success: true, contactId: ghlData.contact?.id }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error in submit-contact function:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
