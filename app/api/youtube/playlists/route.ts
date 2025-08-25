import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export async function GET() {
    try {
        if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
            return NextResponse.json(
                { error: 'YouTube API key or Channel ID not configured' },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch playlists');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching playlists:', error);
        return NextResponse.json(
            { error: 'Failed to fetch playlists' },
            { status: 500 }
        );
    }
}