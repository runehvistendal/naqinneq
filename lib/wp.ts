/** Minimal WPGraphQL client */
const WP_GRAPHQL = 'https://cms.sila.gl/graphql';

export async function wpQuery<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const res = await fetch(WP_GRAPHQL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 3600 }, // ISR: rebuild max once per hour
  });
  if (!res.ok) throw new Error(`WPGraphQL ${res.status}`);
  const json = await res.json();
  if (json.errors) {
    console.error('WPGraphQL errors:', json.errors);
    throw new Error(json.errors[0]?.message ?? 'WPGraphQL error');
  }
  return json.data as T;
}

/** Format Ymd → "d. MMMM yyyy" (Danish) */
export function formatDato(ymd: string | null | undefined): string {
  if (!ymd) return '';
  const d = `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`;
  return new Date(d).toLocaleDateString('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Strip HTML tags from WP content */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').trim();
}

/** Split WP post content (HTML blocks) into plain text paragraphs */
export function contentToParagraphs(html: string): string[] {
  return html
    .split(/<\/p>|<br\s*\/?>/)
    .map(s => stripHtml(s))
    .filter(Boolean);
}
