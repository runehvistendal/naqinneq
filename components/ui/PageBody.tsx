import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

export function PageBody({ children }: { children: ReactNode }) {
  return <div className="pagebody">{children}</div>;
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="lede">{children}</p>;
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="sectionheading">{children}</h2>;
}

export function Two({ children }: { children: ReactNode }) {
  return <div className="grid2">{children}</div>;
}

export function Card({
  title,
  tag,
  href,
  children,
}: {
  title?: string;
  tag?: string;
  href?: string;
  children?: ReactNode;
}) {
  const inner = (
    <>
      {tag  && <div className="card-tag">{tag}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">{children}</div>
      {href  && <div className="card-go">Læs mere →</div>}
    </>
  );
  if (href) {
    return <Link href={href} className="card card-link">{inner}</Link>;
  }
  return <div className="card">{inner}</div>;
}

export function CTARow({ children }: { children: ReactNode }) {
  return <div className="ctarow">{children}</div>;
}

export function CTA({
  primary,
  href,
  children,
}: {
  primary?: boolean;
  href?: string;
  children: ReactNode;
}) {
  const cls = 'cta' + (primary ? ' cta-primary' : '');
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} type="button">{children}</button>;
}

export function Callout({ children }: { children: ReactNode }) {
  return <aside className="callout">{children}</aside>;
}

export function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-link">{children}</Link>;
}

// ─── Media components ────────────────────────────────────────────────────────

export function PageImage({
  src,
  alt,
  caption,
  width = 900,
  height = 500,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="page-figure">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="page-figure-img"
        style={{ width: '100%', height: 'auto' }}
      />
      {caption && <figcaption className="page-figure-caption">{caption}</figcaption>}
    </figure>
  );
}

// Embed a YouTube or Vimeo video (or any iframe-embeddable URL)
export function PageVideo({
  src,
  title,
  caption,
}: {
  src: string;
  title: string;
  caption?: string;
}) {
  return (
    <figure className="page-figure">
      <div className="page-video-wrap">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <figcaption className="page-figure-caption">{caption}</figcaption>}
    </figure>
  );
}

export function PersonCard({
  name,
  title,
  phone,
  email,
  initials,
}: {
  name: string;
  title: string;
  phone?: string;
  email?: string;
  initials?: string;
}) {
  const ini = initials ?? name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="person-card">
      <div className="person-avatar" aria-hidden="true">{ini}</div>
      <div className="person-info">
        <div className="person-name">{name}</div>
        <div className="person-title">{title}</div>
        <div className="person-contacts">
          {phone && (
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="person-contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.22 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
              {phone}
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="person-contact">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function PersonGrid({ children }: { children: ReactNode }) {
  return <div className="person-grid">{children}</div>;
}

export function Steps({ children }: { children: ReactNode }) {
  return <div className="steps">{children}</div>;
}

export function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="step">
      <div className="step-n">{n}</div>
      <div>
        <div className="step-t">{title}</div>
        <div className="step-b">{children}</div>
      </div>
    </div>
  );
}
