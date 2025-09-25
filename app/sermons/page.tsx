'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

// Types for YouTube API responses
interface YouTubePlaylist {
    id: string;
    snippet: {
        title: string;
        description: string;
        thumbnails: {
            maxres?: { url: string };
            high?: { url: string };
            medium?: { url: string };
            default: { url: string };
        };
        publishedAt: string;
        channelTitle: string;
    };
    contentDetails: {
        itemCount: number;
    };
}

interface YouTubeVideo {
    id: string;
    snippet: {
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: {
            maxres?: { url: string };
            high?: { url: string };
            medium?: { url: string };
            default: { url: string };
        };
    };
    contentDetails: {
        videoId: string;
    };
}

interface YouTubeThumbnails {
    maxres?: { url: string };
    high?: { url: string };
    medium?: { url: string };
    default: { url: string };
}

interface SermonSeries {
    id: string;
    title: string;
    description: string;
    playlistId: string;
    thumbnail: string;
    sermonCount: number;
    dateRange: string;
    verses: string;
    publishedAt: string;
}

interface Sermon {
    id: string;
    title: string;
    videoId: string;
    date: string;
    series: string;
    passage: string;
    description: string;
    publishedAt: string;
}

export default function Sermons() {
    const [sermonSeries, setSermonSeries] = useState<SermonSeries[]>([]);
    const [recentSermons, setRecentSermons] = useState<Sermon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Helper function to get the best quality thumbnail
    const getBestThumbnail = useCallback((thumbnails: YouTubeThumbnails): string => {
        return thumbnails.maxres?.url ||
            thumbnails.high?.url ||
            thumbnails.medium?.url ||
            thumbnails.default?.url ||
            'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
    }, []);

    // Helper function to format date
    const formatDate = useCallback((dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }, []);

    // Helper function to filter out unwanted playlists and extract verses
    const processSeriesData = useCallback((playlist: YouTubePlaylist): SermonSeries | null => {
        const title = playlist.snippet.title;
        const description = playlist.snippet.description;

        // Filter out the main playlist
        if (title.toLowerCase().includes('covenant community church')) {
            return null;
        }

        // Extract verses from title (e.g., "Romans 1-16" from "Romans: The Gospel of God")
        const verseMatch = title.match(/([A-Za-z0-9\s]+)\s*\d+[-:]\d+/);
        const verses = verseMatch ? verseMatch[0] : title.split(':')[0] || title;

        // Format date range
        const dateRange = formatDate(playlist.snippet.publishedAt);

        return {
            id: playlist.id,
            title: title,
            description: description || 'Expository preaching through Scripture.',
            playlistId: playlist.id,
            thumbnail: getBestThumbnail(playlist.snippet.thumbnails),
            sermonCount: playlist.contentDetails.itemCount,
            dateRange,
            verses,
            publishedAt: playlist.snippet.publishedAt
        };
    }, [formatDate, getBestThumbnail]);

    // Process videos into sermon format
    const processVideoData = useCallback((video: YouTubeVideo, seriesTitle: string): Sermon => {
        const title = video.snippet.title;

        // Extract passage from title (basic pattern matching)
        const passageMatch = title.match(/([A-Za-z0-9\s]+\s+\d+:\d+[-\d]*)/);
        const passage = passageMatch ? passageMatch[1] : 'Scripture';

        return {
            id: video.id,
            title: title,
            videoId: video.contentDetails.videoId,
            date: formatDate(video.snippet.publishedAt),
            series: seriesTitle,
            passage,
            description: video.snippet.description.substring(0, 150) + '...' || 'Listen to this sermon from our series.',
            publishedAt: video.snippet.publishedAt
        };
    }, [formatDate]);

    // Fetch playlists from our API route
    const fetchPlaylists = useCallback(async (): Promise<YouTubePlaylist[]> => {
        const response = await fetch('/api/youtube/playlists');

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch playlists');
        }

        const data = await response.json();
        return data.items || [];
    }, []);

    // Fetch recent videos from a playlist via our API route
    const fetchPlaylistVideos = useCallback(async (playlistId: string, maxResults = 10): Promise<YouTubeVideo[]> => {
        const response = await fetch(`/api/youtube/playlist-videos?playlistId=${playlistId}&maxResults=${maxResults}`);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch playlist videos');
        }

        const data = await response.json();
        return data.items || [];
    }, []);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch playlists
                const playlists = await fetchPlaylists();

                // Process playlists into sermon series, filtering out unwanted ones
                const processedSeries = playlists
                    .map(processSeriesData)
                    .filter((series): series is SermonSeries => series !== null)
                    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

                setSermonSeries(processedSeries);

                // Get recent sermons across playlists: fetch a few videos from each recent series,
                // merge them, sort by published date, and keep the latest 3 videos overall.
                if (processedSeries.length > 0) {
                    // Limit number of playlists to query to avoid excessive API calls
                    const seriesToQuery = processedSeries.slice(0, 8);

                    // Fetch videos for each series in parallel (grab up to 5 per playlist)
                    const fetchPromises = seriesToQuery.map(series =>
                        fetchPlaylistVideos(series.playlistId, 5)
                            .then((items: YouTubeVideo[]) => ({ seriesTitle: series.title, items }))
                            .catch(err => {
                                console.warn('Failed to fetch videos for playlist', series.playlistId, err);
                                return { seriesTitle: series.title, items: [] as YouTubeVideo[] };
                            })
                    );

                    const results = await Promise.all(fetchPromises);

                    // Process and flatten all videos
                    const allSermons: Sermon[] = [];
                    for (const res of results) {
                        const { seriesTitle, items } = res as { seriesTitle: string; items: YouTubeVideo[] };
                        const processed = (items || []).map(video => {
                            const s = processVideoData(video, seriesTitle);
                            // keep raw publishedAt for sorting
                            return { ...s, publishedAt: video.snippet?.publishedAt || '' };
                        });
                        allSermons.push(...processed);
                    }

                    // Sort by publishedAt desc and take top 3
                    const topThree = allSermons
                        .filter(s => s.publishedAt)
                        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
                        .slice(0, 3);

                    setRecentSermons(topThree);
                }
            } catch (err) {
                console.error('Error loading sermon data:', err);
                setError(err instanceof Error ? err.message : 'Failed to load sermon data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [fetchPlaylists, fetchPlaylistVideos, processSeriesData, processVideoData]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy mx-auto mb-4"></div>
                    <p className="text-brown font-body">Loading sermons...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="text-red-500 mb-4">
                        <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.728-.833-2.498 0L4.316 15.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-brown mb-2">Unable to Load Sermons</h2>
                    <p className="text-brown font-body mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded-2xl font-body"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Sermons" />

            {/* Recent Sermons */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">Recent Sermons</h2>
                        <p className="text-lg text-brown font-body">Our latest messages from Sunday worship</p>
                    </div>

                    {recentSermons.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {recentSermons.map((sermon) => (
                                <div key={sermon.id} className="bg-white border border-warm rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                    {/* YouTube Thumbnail */}
                                    <div className="relative aspect-video bg-warm">
                                        <Image
                                            src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                                            alt={sermon.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <a
                                                href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-navy hover:bg-navy/90 text-white p-3 rounded-full transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Sermon Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-heading font-bold text-brown mb-2">{sermon.title}</h3>
                                        <div className="flex items-center text-sm text-brown mb-3 font-body">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {sermon.date}
                                        </div>
                                        <div className="mb-3">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warm text-brown font-body">
                                                {sermon.passage}
                                            </span>
                                        </div>
                                        <p className="text-brown text-sm leading-relaxed font-body">{sermon.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-brown font-body">
                            <p>No recent sermons available</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Sermon Series */}
            <section className="py-16 bg-warm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">Sermon Series</h2>
                        <p className="text-lg text-brown mb-8 font-body">
                            Explore our verse-by-verse expository preaching through books of the Bible
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {sermonSeries.map((series) => (
                            <div key={series.id} className="bg-white rounded-2xl shadow-sm border border-warm overflow-hidden">
                                {/* Series Header */}
                                <div className="relative aspect-video">
                                    <Image
                                        src={series.thumbnail}
                                        alt={series.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                    />
                                </div>

                                {/* Series Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-heading font-bold text-brown mb-3">{series.title}</h3>
                                    <p className="text-brown leading-relaxed mb-4 font-body">{series.description}</p>

                                    {/* Series Stats */}
                                    <div className="flex items-center justify-between text-sm text-brown mb-6 font-body">
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            {series.sermonCount} sermons
                                        </div>
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {series.dateRange}
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <a
                                        href={`https://www.youtube.com/playlist?list=${series.playlistId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center w-full justify-center px-4 py-2 bg-navy hover:bg-navy/90 text-white font-medium rounded-2xl transition-colors font-body"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                        Watch Playlist on YouTube
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}