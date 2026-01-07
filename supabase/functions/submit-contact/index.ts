import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GHL_API_BASE = 'https://services.leadconnectorhq.com';

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

    const headers = {
      'Authorization': `Bearer ${GHL_API_KEY}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28',
    };

    console.log('Step 1: Upserting contact in GHL:', { name, email, phone: phone || 'not provided' });

    // Step 1: Upsert contact
    const upsertResponse = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        name,
        email,
        phone: phone || undefined,
        source: 'Website Contact Form',
      }),
    });

    const upsertData = await upsertResponse.json();
    console.log('Upsert response status:', upsertResponse.status);
    console.log('Upsert response:', JSON.stringify(upsertData));

    if (!upsertResponse.ok) {
      console.error('GHL upsert error:', upsertData);
      return new Response(
        JSON.stringify({ error: 'Failed to upsert contact', details: upsertData }),
        { status: upsertResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const contactId = upsertData.contact?.id;
    if (!contactId) {
      console.error('No contact ID returned from upsert');
      return new Response(
        JSON.stringify({ error: 'No contact ID returned' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Step 2: Adding tag to contact:', contactId);

    // Step 2: Add tag to contact
    const tagResponse = await fetch(`${GHL_API_BASE}/contacts/${contactId}/tags`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        tags: ['website-contact'],
      }),
    });

    const tagData = await tagResponse.json();
    console.log('Tag response status:', tagResponse.status);
    console.log('Tag response:', JSON.stringify(tagData));

    console.log('Step 3: Creating conversation for contact:', contactId);

    // Step 3: Create conversation
    const conversationResponse = await fetch(`${GHL_API_BASE}/conversations`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        contactId,
      }),
    });

    const conversationData = await conversationResponse.json();
    console.log('Conversation response status:', conversationResponse.status);
    console.log('Conversation response:', JSON.stringify(conversationData));

    if (!conversationResponse.ok) {
      console.error('GHL conversation error:', conversationData);
      return new Response(
        JSON.stringify({ error: 'Failed to create conversation', details: conversationData }),
        { status: conversationResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const conversationId = conversationData.conversation?.id;
    if (!conversationId) {
      console.error('No conversation ID returned');
      return new Response(
        JSON.stringify({ error: 'No conversation ID returned' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Step 4: Adding message to conversation:', conversationId);

    // Step 4: Add message to conversation
    const messageResponse = await fetch(`${GHL_API_BASE}/conversations/messages`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        type: 'Custom',
        conversationId,
        contactId,
        message: `Website Contact Form Submission:\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}\n\nMessage:\n${message}`,
        direction: 'inbound',
      }),
    });

    const messageData = await messageResponse.json();
    console.log('Message response status:', messageResponse.status);
    console.log('Message response:', JSON.stringify(messageData));

    if (!messageResponse.ok) {
      console.error('GHL message error:', messageData);
      return new Response(
        JSON.stringify({ error: 'Failed to add message', details: messageData }),
        { status: messageResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        contactId,
        conversationId,
        messageId: messageData.message?.id 
      }),
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
