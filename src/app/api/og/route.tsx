import { ImageResponse } from 'next/og';

export const dynamic = 'force-dynamic';

function money(n: number) {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const price = Math.min(Math.max(parseFloat(searchParams.get('p') || '19.99'), 1), 999);
  const subs = Math.min(Math.max(parseInt(searchParams.get('s') || '250', 10), 1), 1_000_000);
  const monthly = price * 0.80 * subs;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A3E 60%, #0F0F23 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #FF6B6B, #A855F7)',
              display: 'flex',
            }}
          />
          <div style={{ color: 'white', fontSize: '34px', fontWeight: 800 }}>Twiinn AI</div>
        </div>

        <div style={{ display: 'flex', color: '#94A3B8', fontSize: '30px', marginBottom: '8px' }}>
          My AI twin could earn
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '16px', marginBottom: '8px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '120px',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #FF6B6B, #A855F7)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1,
            }}
          >
            {`$${money(monthly)}`}
          </div>
          <div style={{ display: 'flex', color: '#94A3B8', fontSize: '34px', paddingBottom: '18px' }}>
            /month
          </div>
        </div>
        <div style={{ display: 'flex', color: 'white', fontSize: '34px', fontWeight: 600, marginBottom: '40px' }}>
          …while I sleep. 😴
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          {[
            `${money(subs)} subscribers`,
            `$${price.toFixed(2)}/mo each`,
            'You keep 80%',
          ].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                color: '#E2E8F0',
                fontSize: '24px',
                padding: '10px 22px',
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {t}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', color: '#64748B', fontSize: '24px', marginTop: '40px' }}>
          Clone yourself at twiinn.ai
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
