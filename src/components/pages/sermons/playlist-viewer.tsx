"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playlist, Video } from "@/lib/utils";
import Link from "next/link";

interface PlaylistViewerProps {
    playlist: Playlist;
}

export function PlaylistViewer({ playlist }: PlaylistViewerProps) {
    // The first video is active by default, or null if the playlist is empty
    const [activeVideo, setActiveVideo] = useState<Video | null>(playlist.videos[0] || null);

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <Link href="/sermons" className="text-primary hover:underline">
                            &larr; Back to All Sermon Series
                        </Link>
                        <h1 className="text-3xl font-bold text-center mt-2">{playlist.playlistTitle}</h1>
                    </div>
                    {/* Main Video Player */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 aspect-video rounded-xl overflow-hidden bg-muted relative max-w-4xl mx-auto"
                    >
                        {activeVideo ? (
                            <iframe
                                key={activeVideo.id.videoId} // Add key to force re-render on video change
                                src={`https://www.youtube.com/embed/${activeVideo.id.videoId}`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                title={activeVideo.snippet.title}
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <p className="text-center text-gray-500">No videos in this series.</p>
                            </div>
                        )}
                    </motion.div>

                    {/* Video Grid */}
                    <h2 className="text-xl font-semibold mb-4 text-center">Videos in this Series</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {playlist.videos.map((video) => (
                            <div
                                key={video.id.videoId}
                                className="cursor-pointer group"
                                onClick={() => setActiveVideo(video)}
                            >
                                <div className="aspect-video rounded-lg overflow-hidden bg-muted border-2 border-transparent group-hover:border-primary transition-all">
                                    <img
                                        src={video.snippet.thumbnails?.medium?.url || ''}
                                        alt={video.snippet.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-sm mt-2 text-center">{video.snippet.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}