import { NextRequest, NextResponse } from 'next/server';

const social = {
  github: 'https://github.com/gabrielvfonseca',
  twitter: 'https://twitter.com/home',
  linkedin: 'https://www.linkedin.com/in/gabrielfonsecaa/',
};

export function middleware(request: NextRequest, res: NextResponse) {
  if (request.nextUrl.pathname.startsWith('/s/github')) {
    return NextResponse.redirect(social.github);
  }

  if (request.nextUrl.pathname.startsWith('/s/twitter')) {
    return NextResponse.redirect(social.twitter);
  }

  if (request.nextUrl.pathname.startsWith('/s/linkedin')) {
    return NextResponse.redirect(social.linkedin);
  }
}
