/**
 * Twin avatar components — Real Bitmoji 3D style.
 * Each renders a cropped circle from the Bitmoji head PNG.
 * Bitmoji head renders are already face-focused,
 * so we use a gentle zoom to fill the circle nicely.
 */

interface TwinProps {
  size?: number;
}

function TwinAvatar({ src, size = 40 }: TwinProps & { src: string }) {
  const scale = 2.2;
  const imgSize = size * scale;
  return (
    <span
      className="inline-block rounded-full overflow-hidden flex-shrink-0 relative"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={imgSize}
        height={imgSize}
        draggable={false}
        style={{
          position: 'absolute',
          width: imgSize,
          minWidth: imgSize,
          height: imgSize,
          top: size * -0.15,
          left: (size - imgSize) / 2,
        }}
      />
    </span>
  );
}

export function TwinCoachMike({ size = 40 }: TwinProps) {
  return <TwinAvatar src="/twins/coach-mike.png" size={size} />;
}

export function TwinSarahGlow({ size = 40 }: TwinProps) {
  return <TwinAvatar src="/twins/sarah-glow.png" size={size} />;
}

export function TwinAlexCapital({ size = 40 }: TwinProps) {
  return <TwinAvatar src="/twins/alex-capital.png" size={size} />;
}

export function TwinSarahK({ size = 40 }: TwinProps) {
  return <TwinAvatar src="/twins/sarah-k.png" size={size} />;
}

export function MiniAvatar({ index, size = 36 }: { index: number; size?: number }) {
  const srcs = ['/twins/mini-1.png', '/twins/mini-2.png', '/twins/mini-3.png', '/twins/mini-4.png'];
  return <TwinAvatar src={srcs[index % srcs.length]} size={size} />;
}
