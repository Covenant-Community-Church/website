'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

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

interface SermonSeries {
    id: string;
    title: string;
    description: string;
    playlistId: string;
    thumbnail: string;
    sermonCount: number;
    dateRange: string;
    status: 'current' | 'completed';
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
}

const YT_API_KEY = process.env.NEXT_PUBLIC_YT_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;

export default function Sermons() {
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'current' | 'completed'>('all');
    const [sermonSeries, setSermonSeries] = useState<SermonSeries[]>([]);
    const [recentSermons, setRecentSermons] = useState<Sermon[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch playlists from YouTube API
    const fetchPlaylists = async (): Promise<YouTubePlaylist[]> => {
        if (!YT_API_KEY || !CHANNEL_ID) {
            throw new Error('YouTube API key or Channel ID not configured');
        }

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${CHANNEL_ID}&maxResults=50&key=${YT_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch playlists');
        }

        const data = await response.json();
        return data.items || [];
    };

    // Fetch recent videos from a playlist
    const fetchPlaylistVideos = async (playlistId: string, maxResults = 10): Promise<YouTubeVideo[]> => {
        if (!YT_API_KEY) {
            throw new Error('YouTube API key not configured');
        }

        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&maxResults=${maxResults}&order=date&key=${YT_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch playlist videos');
        }

        const data = await response.json();
        return data.items || [];
    };

    // Helper function to get the best quality thumbnail
    const getBestThumbnail = (thumbnails: any): string => {
        return thumbnails.maxres?.url ||
            thumbnails.high?.url ||
            thumbnails.medium?.url ||
            thumbnails.default?.url ||
            'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg';
    };

    // Helper function to format date
    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Helper function to determine series status and extract verses
    const processSeriesData = (playlist: YouTubePlaylist): SermonSeries => {
        const title = playlist.snippet.title;
        const description = playlist.snippet.description;

        // Extract verses from title (e.g., "Romans 1-16" from "Romans: The Gospel of God")
        const verseMatch = title.match(/([A-Za-z0-9\s]+)\s*\d+[-:]\d+/);
        const verses = verseMatch ? verseMatch[0] : title.split(':')[0] || title;

        // Determine status based on recent activity (if published within last 6 months, consider current)
        const publishedDate = new Date(playlist.snippet.publishedAt);
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const status: 'current' | 'completed' = publishedDate > sixMonthsAgo ? 'current' : 'completed';

        // Format date range
        const dateRange = formatDate(playlist.snippet.publishedAt) + (status === 'current' ? ' - Present' : '');

        return {
            id: playlist.id,
            title: title,
            description: description || 'Expository preaching through Scripture.',
            playlistId: playlist.id,
            thumbnail: getBestThumbnail(playlist.snippet.thumbnails),
            sermonCount: playlist.contentDetails.itemCount,
            dateRange,
            status,
            verses,
            publishedAt: playlist.snippet.publishedAt
        };
    };

    // Process videos into sermon format
    const processVideoData = (video: YouTubeVideo, seriesTitle: string): Sermon => {
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
            description: video.snippet.description.substring(0, 150) + '...' || 'Listen to this sermon from our series.'
        };
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                // Fetch playlists
                const playlists = await fetchPlaylists();

                // Process playlists into sermon series
                const processedSeries = playlists
                    .map(processSeriesData)
                    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

                setSermonSeries(processedSeries);

                // Get recent sermons from the most recent playlist
                if (processedSeries.length > 0) {
                    const mostRecentSeries = processedSeries[0];
                    const videos = await fetchPlaylistVideos(mostRecentSeries.playlistId, 3);
                    const processedSermons = videos.map(video =>
                        processVideoData(video, mostRecentSeries.title)
                    );
                    setRecentSermons(processedSermons);
                }
            } catch (err) {
                console.error('Error loading sermon data:', err);
                setError(err instanceof Error ? err.message : 'Failed to load sermon data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const filteredSeries = sermonSeries.filter(series => {
        if (selectedFilter === 'all') return true;
        return series.status === selectedFilter;
    });

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
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            Sermons
                        </h1>
                        <p className="text-lg text-brown max-w-2xl mx-auto font-body">
                            Listen to God&apos;s Word faithfully preached through verse-by-verse exposition of Scripture.
                        </p>
                    </div>
                </div>
            </section>

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
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                            <a
                                                href={`https://www.youtube.com/watch?v=${sermon.videoId}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-navy hover:bg-navy/90 text-white p-3 rounded-full transition-colors"
                                            >
                                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Sermon Info */}
                                    <div className="p-6">
                                        <div className="mb-2">
                                            <span className="text-sm text-navy font-medium font-body">{sermon.series}</span>
                                        </div>
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

                        {/* Filter Buttons */}
                        <div className="flex justify-center space-x-2">
                            <button
                                onClick={() => setSelectedFilter('all')}
                                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors font-body ${
                                    selectedFilter === 'all'
                                        ? 'bg-navy text-white'
                                        : 'bg-white text-brown border border-warm hover:bg-white/80'
                                }`}
                            >
                                All Series
                            </button>
                            <button
                                onClick={() => setSelectedFilter('current')}
                                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors font-body ${
                                    selectedFilter === 'current'
                                        ? 'bg-navy text-white'
                                        : 'bg-white text-brown border border-warm hover:bg-white/80'
                                }`}
                            >
                                Current
                            </button>
                            <button
                                onClick={() => setSelectedFilter('completed')}
                                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors font-body ${
                                    selectedFilter === 'completed'
                                        ? 'bg-navy text-white'
                                        : 'bg-white text-brown border border-warm hover:bg-white/80'
                                }`}
                            >
                                Completed
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {filteredSeries.map((series) => (
                            <div key={series.id} className="bg-white rounded-2xl shadow-sm border border-warm overflow-hidden">
                                {/* Series Header */}
                                <div className="relative h-48">
                                    <Image
                                        src={series.thumbnail}
                                        alt={series.title}
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4">
                                        {series.status === 'current' ? (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-navy text-white font-body">
                                                Current Series
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warm text-brown font-body">
                                                Completed
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Series Content */}
                                <div className="p-6">
                                    <div className="mb-2">
                                        <span className="text-sm text-navy font-medium font-body">{series.verses}</span>
                                    </div>
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
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                        </svg>
                                        Watch Playlist on YouTube
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scripture Section */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-6 font-body">
                        &#34;All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work.&#34;
                    </blockquote>
                    <cite className="text-lg font-medium opacity-90 font-body">2 Timothy 3:16-17</cite>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-brown text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                        Join Us for Worship
                    </h2>
                    <p className="text-xl mb-8 font-body">
                        Experience the preaching of God&#39;s Word in person every Sunday morning.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/about/meeting-times"
                            className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-2xl text-lg font-medium transition-colors font-body"
                        >
                            Service Times
                        </a>
                        <a
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-brown px-8 py-3 rounded-2xl text-lg font-medium transition-colors font-body"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}