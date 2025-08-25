import { Playlist } from './utils';

// This function fetches all playlists from your API.
// We add caching to prevent re-fetching on every request.
export async function fetchPlaylists(): Promise<Playlist[]> {
    try {
        // The `next: { revalidate: 3600 }` option caches the data for 1 hour.
        const res = await fetch(`http://localhost:3000/api/youtube`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) {
            throw new Error('Failed to fetch playlists from API');
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error("Error fetching sermons:", error);
        // Return an empty array on error so the app doesn't crash
        return [];
    }
}