import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const playlistId = searchParams.get('playlistId');
        const maxResults = searchParams.get('maxResults') || '10';

        if (!YOUTUBE_API_KEY) {
            return NextResponse.json(
                { error: 'YouTube API key not configured' },
                { status: 500 }
            );
        }

        if (!playlistId) {
            return NextResponse.json(
                { error: 'Playlist ID is required' },
                { status: 400 }
            );
        }

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&order=date&key=${YOUTUBE_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch playlist videos');
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching playlist videos:', error);
        return NextResponse.json(
            { error: 'Failed to fetch playlist videos' },
            { status: 500 }
        );
    }
}