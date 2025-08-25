export async function GET() {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCJn4dKW-UT6jbNgbMNsgsow";

    if (!API_KEY) {
        return new Response(JSON.stringify({ error: "YouTube API key is missing" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        // 1. Fetch playlists from the channel
        const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&maxResults=25`;
        const playlistsResponse = await fetch(playlistsUrl);
        if (!playlistsResponse.ok) {
            throw new Error('Failed to fetch playlists');
        }
        const playlistsData = await playlistsResponse.json();

        // 2. For each playlist, fetch its videos
        const playlists = await Promise.all(
            playlistsData.items.map(async (playlist: any) => {
                const playlistItemsUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${playlist.id}&part=snippet&maxResults=10`;
                const playlistItemsResponse = await fetch(playlistItemsUrl);
                if (!playlistItemsResponse.ok) {
                    // Silently fail for individual playlists, or handle as needed
                    return {
                        playlistTitle: playlist.snippet.title,
                        videos: [],
                    };
                }
                const playlistItemsData = await playlistItemsResponse.json();

                return {
                    playlistTitle: playlist.snippet.title,
                    videos: playlistItemsData.items.map((item: any) => ({
                        id: {
                            videoId: item.snippet.resourceId.videoId,
                        },
                        snippet: item.snippet,
                    })),
                };
            })
        );

        return new Response(JSON.stringify(playlists), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        console.error("Failed to fetch YouTube data:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch YouTube data" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}