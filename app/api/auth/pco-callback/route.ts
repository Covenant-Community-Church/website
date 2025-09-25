import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';

const PCO_CLIENT_ID = process.env.PCO_CLIENT_ID;
const PCO_CLIENT_SECRET = process.env.PCO_CLIENT_SECRET;
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const PCO_REDIRECT_URI = process.env.NEXT_PUBLIC_PCO_REDIRECT_URI;
const PCO_ORGANIZATION_ID = process.env.PCO_ORGANIZATION_ID;

export async function POST(request: NextRequest) {
  const { code } = await request.json();

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  if (!PCO_CLIENT_ID || !PCO_CLIENT_SECRET || !TOKEN_SECRET || !PCO_REDIRECT_URI || !PCO_ORGANIZATION_ID) {
    console.error('Missing required environment variables for PCO auth');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    // 1. Exchange authorization code for an access token
    const tokenResponse = await fetch('https://api.planningcenteronline.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code,
        client_id: PCO_CLIENT_ID,
        client_secret: PCO_CLIENT_SECRET,
        redirect_uri: PCO_REDIRECT_URI,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Failed to fetch PCO token:', tokenData);
      return NextResponse.json({ error: 'Failed to fetch token' }, { status: 401 });
    }

    const { access_token } = tokenData;

    // 2. Fetch user data from the 'me' endpoint
    const userResponse = await fetch('https://api.planningcenteronline.com/people/v2/me?include=emails,addresses,households', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('Failed to fetch PCO user data:', userData);
      return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 401 });
    }

    // 3. Verify the user belongs to the correct organization
    if (userData.meta.parent.id !== PCO_ORGANIZATION_ID) {
        console.error(`User organization ID ${userData.meta.parent.id} does not match expected ID ${PCO_ORGANIZATION_ID}`);
        return NextResponse.json({ error: 'User does not belong to the correct organization' }, { status: 403 });
    }

    // 4. Create a smaller user object for the JWT payload
    const userProfile = {
      id: userData.data.id,
      name: userData.data.attributes.name,
      avatar: userData.data.attributes.avatar,
      // Find the primary email from the 'included' array
      email: userData.included?.find((item: { type: string; attributes: { primary: boolean, address: string } }) => item.type === 'Email' && item.attributes.primary)?.attributes.address,
    };

    // 5. Create a JWT with the smaller payload
    const secret = new TextEncoder().encode(TOKEN_SECRET);
    const jwt = await new SignJWT(userProfile)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    // 6. Set the JWT as a secure, httpOnly cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set('pco_session', jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;

  } catch (error) {
    console.error('PCO callback error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
