import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'contact@maad-ai.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, email, name, handle, followers, niche } = body;

    if (!email || !type) {
      return Response.json(
        { error: 'Email and type are required' },
        { status: 400 }
      );
    }

    // Build email content based on signup type
    const isCreator = type === 'creator';

    const subject = isCreator
      ? `New Creator Waitlist: ${name || 'Unknown'}`
      : `New Fan Waitlist Signup`;

    const htmlContent = isCreator
      ? `
        <h2>New Creator Waitlist Signup</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name || '-'}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Social Handle</td><td style="padding:8px;border-bottom:1px solid #eee;">${handle || '-'}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Followers</td><td style="padding:8px;border-bottom:1px solid #eee;">${followers || '-'}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Niche</td><td style="padding:8px;border-bottom:1px solid #eee;">${niche || '-'}</td></tr>
        </table>
      `
      : `
        <h2>New Fan Waitlist Signup</h2>
        <p><strong>Email:</strong> ${email}</p>
      `;

    // Send notification email
    const { error } = await resend.emails.send({
      from: 'Twiinn AI <onboarding@resend.dev>',
      to: [NOTIFY_EMAIL],
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
