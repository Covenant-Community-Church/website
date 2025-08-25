import Link from 'next/link';
import { fetchPlaylists } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Assuming you use ShadCN UI, otherwise use divs

export default async function SermonGrid() {
    const playlists = await fetchPlaylists();

    if (!playlists || playlists.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No sermon series found.</p>;
    }

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mb-8">Sermon Series</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {playlists.map((playlist) => {
                        // Use the first video's thumbnail as the cover image
                        const thumbnailUrl = playlist.videos[0]?.snippet.thumbnails?.medium?.url;
                        const playlistSlug = slugify(playlist.playlistTitle);

                        return (
                            <Link key={playlistSlug} href={`/sermons/${playlistSlug}`} className="group">
                                <Card className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-lg">
                                    <CardHeader className="p-0">
                                        <div className="aspect-video bg-muted flex items-center justify-center">
                                            {thumbnailUrl ? (
                                                <img
                                                    src={thumbnailUrl}
                                                    alt={playlist.playlistTitle}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <span className="text-muted-foreground">No Image</span>
                                            )}
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4">
                                        <CardTitle className="text-lg font-semibold">{playlist.playlistTitle}</CardTitle>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}