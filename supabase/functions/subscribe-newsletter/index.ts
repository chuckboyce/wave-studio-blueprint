import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GHL_API_BASE = 'https://services.leadconnectorhq.com';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

    const { name, email } = await req.json();

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const headers = {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28',
    };

    console.log('Step 1: Upserting newsletter contact in GHL:', { name, email });

    // Step 1: Upsert contact
    const upsertResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        name,
        email,
        source: 'Website Newsletter',
      }),
    });

    const upsertData = await upsertResponse.json();
    console.log('Upsert response status:', upsertResponse.status);
    console.log('Upsert response:', JSON.stringify(upsertData));

    if (!upsertResponse.ok) {
      console.error('GHL upsert error:', upsertData);
      return new Response(
        JSON.stringify({ error: 'Unable to subscribe. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const contactId = upsertData.contact?.id;
    if (!contactId) {
      console.error('No contact ID returned from upsert');
      return new Response(
        JSON.stringify({ error: 'Unable to subscribe. Please try again.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Step 2: Adding newsletter tag to contact:', contactId);

    // Step 2: Add newsletter tag to contact
    const tagResponse = await fetch(`${GHL_API_BASE}/contacts/${contactId}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: ['newsletter'],
      }),
    });

    const tagData = await tagResponse.json();
    console.log('Tag response status:', tagResponse.status);
    console.log('Tag response:', JSON.stringify(tagData));

    if (!tagResponse.ok) {
      console.error('GHL tag error:', tagData);
      // Still return success since the contact was created
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        contactId,
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    console.error('Error in subscribe-newsletter function:', error);
    return new Response(
      JSON.stringify({ error: 'Unable to subscribe. Please try again.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
