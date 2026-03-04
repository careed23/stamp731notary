import type { APIRoute } from 'astro';
import { CONTACT_EMAIL } from '../../consts';

interface SendEmail {
  send(message: { to: string; from: string; subject: string; content: string }): Promise<void>;
}

interface RuntimeEnv {
  MAIL: SendEmail;
}

export const POST: APIRoute = async ({ request, env }) => {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
      },
    });
  }

  try {
    const formData = await request.formData();

    const name = formData.get('name') || 'N/A';
    const email = formData.get('email') || 'N/A';
    const phone = formData.get('phone') || 'N/A';
    const service = formData.get('service') || 'N/A';
    const message = formData.get('message') || 'N/A';

    const emailBody = `
      New Contact Form Submission:\n
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Service: ${service}\n
      Message: ${message}
    `;

    const runtimeEnv = env as unknown as RuntimeEnv;

    await runtimeEnv.MAIL.send({
      to: CONTACT_EMAIL,
      from: 'contact-form@stamp731.com', // Replace with a verified sender email in Cloudflare Email Routing
      subject: `New Contact Form Submission from ${name}`,
      content: emailBody,
    });

    return new Response(JSON.stringify({ status: 'success', message: 'Email sent successfully!' }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Failed to send email.' }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 500,
    });
  }
};
