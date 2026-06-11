import { Resend } from 'resend';
import { saveSignup, getWaitlistStats, diagnoseRedis } from '@/lib/waitlist';

export const dynamic = 'force-dynamic';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Health/stats: confirms whether Redis persistence is live (no email side effects). */
export async function GET() {
  const diag = await diagnoseRedis();
  const stats = diag.ok ? await getWaitlistStats() : null;
  return Response.json({
    persistence: diag.ok,
    creators: stats?.creators ?? null,
    total: stats?.total ?? null,
    diag,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, email, name, handle, followers, niche, ref } = body;

    if (!email || !type || !EMAIL_RE.test(String(email)) || (type !== 'creator' && type !== 'fan')) {
      return Response.json(
        { error: 'A valid email and type (creator or fan) are required' },
        { status: 400 }
      );
    }

    // Persist first so a signup is never lost to an email hiccup.
    let creatorPosition: number | null = null;
    let skipNotification = false;
    try {
      const result = await saveSignup({ type, email, name, handle, followers, niche, ref });
      creatorPosition = result.creatorPosition;
      // Duplicate signup (already stored) — don't re-notify the owner.
      skipNotification = result.stored && !result.isNew;
    } catch (dbErr) {
      console.error('Waitlist persistence failed:', dbErr);
    }

    // Try to send email notification (non-blocking — don't fail if email fails)
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && !skipNotification) {
      try {
        const resend = new Resend(apiKey);
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

        // Send to the Resend account owner's email (free tier limitation)
        const notifyEmail = process.env.NOTIFY_EMAIL || 'Marc-Alexandre.Duval@maad-ai.com';

        await resend.emails.send({
          from: 'Twiinn AI <onboarding@resend.dev>',
          to: [notifyEmail],
          subject,
          html: htmlContent,
        });
      } catch (emailErr) {
        // Log but don't fail — the signup still counts
        console.error('Email notification failed:', emailErr);
      }
    }

    return Response.json({ success: true, creatorPosition });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
