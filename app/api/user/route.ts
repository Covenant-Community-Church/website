import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get('pco_session');

  if (!sessionCookie) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  if (!TOKEN_SECRET) {
    console.error('TOKEN_SECRET is not defined');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const secret = new TextEncoder().encode(TOKEN_SECRET);
    const { payload } = await jwtVerify(sessionCookie.value, secret);

    // The payload from the JWT is the user data
    return NextResponse.json(payload);
  } catch (error) {
    console.error('JWT verification failed:', error);
    // Clear the invalid cookie
    const response = NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    response.cookies.set('pco_session', '', { maxAge: -1 });
    return response;
  }
}
