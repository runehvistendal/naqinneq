export function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className="brandmark" aria-hidden="true">
      <rect width="40" height="40" rx="6" fill="var(--primary)" />
      <path d="M5 30 L14 16 L20 24 L26 14 L35 30 Z" fill="var(--ice)" opacity="0.95" />
      <path d="M5 30 L14 22 L20 27 L26 22 L35 30 Z" fill="var(--accent)" opacity="0.85" />
      <rect y="30" width="40" height="3" fill="var(--ink)" opacity="0.4" />
    </svg>
  );
}
