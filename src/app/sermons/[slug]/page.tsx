import { notFound } from 'next/navigation';
import { fetchPlaylists } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { PlaylistViewer } from '@/components/pages/sermons/playlist-viewer';

interface PageProps {
    params: {
        slug: string;
    };
}

export default async function PlaylistPage({ params }: PageProps) {
    const { slug } = await params;
    const playlists = await fetchPlaylists();

    // Find the playlist that matches the slug from the URL
    const currentPlaylist = playlists.find(p => slugify(p.playlistTitle) === slug);

    // If no playlist matches, show a 404 page
    if (!currentPlaylist) {
        notFound();
    }

    // Pass the found playlist data to the interactive client component
    return <PlaylistViewer playlist={currentPlaylist} />;
}

// (Optional but Recommended) Generate static pages at build time for better performance
export async function generateStaticParams() {
    const playlists = await fetchPlaylists();

    return playlists.map((playlist) => ({
        slug: slugify(playlist.playlistTitle),
    }));
}