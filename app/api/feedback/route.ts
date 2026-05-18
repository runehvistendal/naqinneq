import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TO = 'rune.runesen@gmail.com';

// Simple in-memory rate limiter: max 5 submissions per IP per minute
const rateMap = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60_000;
  const times = (rateMap.get(ip) ?? []).filter(t => now - t < window);
  if (times.length >= 5) return true;
  times.push(now);
  rateMap.set(ip, times);
  return false;
}

export async function POST(req: NextRequest) {
  let body: { type?: string; message?: string; page?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { type, message, page, website } = body;

  // Honeypot: bots fill hidden fields, humans don't
  if (website) return NextResponse.json({ ok: false }, { status: 400 });

  if (!type || !['ja', 'nej', 'aendring'].includes(type)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim()
    ?? req.headers.get('x-real-ip')
    ?? 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limit' }, { status: 429 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('GMAIL_USER / GMAIL_APP_PASSWORD not set — feedback not sent');
    return NextResponse.json({ ok: true, warn: 'no_email_config' });
  }

  const subjects: Record<string, string> = {
    ja: 'Naqinneq feedback: Siden var nyttig',
    nej: 'Naqinneq feedback: Siden var ikke nyttig',
    aendring: 'Naqinneq: Forslag til ændring',
  };

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  try {
    await transporter.sendMail({
      from: `"Naqinneq.gl" <${process.env.GMAIL_USER}>`,
      to: TO,
      subject: subjects[type],
      text: `Side: ${page ?? '(ukendt)'}\n\n${message?.trim() || '(ingen besked)'}`,
    });
  } catch (err) {
    console.error('Feedback email error:', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
