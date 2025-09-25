import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const TOKEN_SECRET = process.env.TOKEN_SECRET;

// Function to verify JWT
async function verifyJwt(token: string) {
  if (!TOKEN_SECRET) {
    throw new Error('TOKEN_SECRET is not defined in environment variables');
  }
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(TOKEN_SECRET));
    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get('pco_session');
  const { pathname } = request.nextUrl;

  // Protect all routes under /members
  if (pathname.startsWith('/members')) {
    // If there's no session cookie, redirect to the login page
    if (!sessionCookie) {
      if (pathname !== '/members/login') {
        return NextResponse.redirect(new URL('/members/login', request.url));
      }
      return NextResponse.next();
    }

    // Verify the JWT
    const payload = await verifyJwt(sessionCookie.value);

    // If the JWT is invalid, redirect to login
    if (!payload) {
        const response = NextResponse.redirect(new URL('/members/login', request.url));
        response.cookies.set('pco_session', '', { maxAge: -1 }); // Clear the invalid cookie
        return response;
    }

    // If the user is authenticated and on the root members page, redirect to dashboard
    if (pathname === '/members') {
        return NextResponse.redirect(new URL('/members/dashboard', request.url));
    }

    // If the user is authenticated and tries to access the login page, redirect to the dashboard
    if (pathname === '/members/login') {
      return NextResponse.redirect(new URL('/members/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/members', '/members/:path*'],
};
