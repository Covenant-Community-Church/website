import { NextResponse } from 'next/server';

export async function GET() {
  // Create a response object to modify cookies
  const response = NextResponse.redirect(new URL('/members/login', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));

  // Clear the session cookie
  response.cookies.set('pco_session', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'lax',
    path: '/',
    maxAge: -1, // Instructs the browser to delete the cookie immediately
  });

  // Also clear the state cookie, just in case it persists
  response.cookies.set('pco_oauth_state', '', {
    maxAge: -1,
  });

  return response;
}
