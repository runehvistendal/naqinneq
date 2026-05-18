import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TO = process.env.KONTAKT_TO ?? 'naqinneq@nanoq.gl';

const rateMap = new Map<string, number[]>();
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateMap.get(ip) ?? []).filter(t => now - t < 60_000);
  hits.push(now);
  rateMap.set(ip, hits);
  return hits.length > 5;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  if (isRateLimited(ip)) return NextResponse.json({ ok: false }, { status: 429 });

  const body = await req.json();
  const { navn, email, emne, besked, website } = body;

  if (website) return NextResponse.json({ ok: false }, { status: 400 });
  if (!navn || !email || !besked) return NextResponse.json({ ok: false }, { status: 400 });

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('Email ikke konfigureret — kontakthenvendelse modtaget men ikke sendt:', { navn, email, emne });
    return NextResponse.json({ ok: true });
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  await transport.sendMail({
    from: `"Naqinneq" <${process.env.GMAIL_USER}>`,
    to: TO,
    replyTo: email,
    subject: `Kontakt: ${emne || '(intet emne)'}`,
    text: [
      `Navn: ${navn}`,
      `E-mail: ${email}`,
      `Emne: ${emne || '—'}`,
      '',
      besked,
    ].join('\n'),
  });

  return NextResponse.json({ ok: true });
}
