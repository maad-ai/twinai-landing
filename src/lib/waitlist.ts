/**
 * Waitlist persistence via Upstash Redis REST API.
 *
 * Degrades gracefully: if UPSTASH_REDIS_REST_URL / _TOKEN are not set, every
 * function is a no-op and the email-notification path still runs. Add the two
 * env vars on Vercel (+ .env.local) to turn persistence on — no code change.
 */

export interface Signup {
  type: 'creator' | 'fan';
  email: string;
  name?: string;
  handle?: string;
  followers?: string;
  niche?: string;
  ref?: string;
}

/* Accepts both naming schemes: UPSTASH_* (direct Upstash) and KV_* (Vercel
   Storage / marketplace integration). */
function redisCreds() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  return url && token ? { url, token } : null;
}

function hasRedis() {
  return redisCreds() !== null;
}

async function redis<T = unknown>(command: (string | number)[]): Promise<T | null> {
  const creds = redisCreds();
  if (!creds) return null;
  const res = await fetch(creds.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${creds.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const data = (await res.json()) as { result: T };
  return data.result;
}

const KEYS = {
  emails: 'twiinn:waitlist:emails',
  list: 'twiinn:waitlist:list',
  creators: 'twiinn:waitlist:creators',
};

/**
 * Stores a signup (deduped by email). Returns whether it persisted, whether
 * the email was new, and the creator's founding position (creators only).
 */
export async function saveSignup(
  entry: Signup
): Promise<{ stored: boolean; isNew: boolean; creatorPosition: number | null }> {
  if (!hasRedis()) return { stored: false, isNew: true, creatorPosition: null };

  const email = entry.email.trim().toLowerCase();
  const added = await redis<number>(['SADD', KEYS.emails, email]);
  const isNew = added === 1;

  if (isNew) {
    await redis([
      'RPUSH',
      KEYS.list,
      JSON.stringify({ ...entry, email, at: new Date().toISOString() }),
    ]);
  }

  let creatorPosition: number | null = null;
  if (entry.type === 'creator') {
    // Count distinct creators only when new; otherwise just read the count.
    creatorPosition = isNew
      ? await redis<number>(['INCR', KEYS.creators])
      : await redis<number>(['GET', KEYS.creators]).then((v) => (v == null ? null : Number(v)));
  }

  return { stored: true, isNew, creatorPosition };
}

/** Live stats for an optional "X of 50 founding spots" counter. */
export async function getWaitlistStats(): Promise<{ creators: number; total: number } | null> {
  if (!hasRedis()) return null;
  try {
    const creators = (await redis<number>(['GET', KEYS.creators])) ?? 0;
    const total = (await redis<number>(['SCARD', KEYS.emails])) ?? 0;
    return { creators: Number(creators), total: Number(total) };
  } catch {
    return null;
  }
}
