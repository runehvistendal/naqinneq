import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intl = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // Design-prototyperne i public/designs/ er statiske SPA'er —
  // de skal ikke gennem next-intl (rewrites i next.config håndterer stierne)
  if (req.nextUrl.pathname.startsWith('/designs')) {
    return NextResponse.next();
  }
  return intl(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
