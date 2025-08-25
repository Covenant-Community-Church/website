'use client';

import { useState } from 'react';

// Mock data for sermons series - in a real app, this would come from an API or CMS
const sermonSeries = [
    {
        id: 1,
        title: "Romans",
        description: "A verse-by-verse exposition through Paul's letter to the Romans, exploring the depths of the Gospel and its implications for Christian living.",
        playlistId: "PL7f8lbvnQo5HwD5bdkSyvRGoDKztYqUZC", // YouTube playlist ID
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg", // Example thumbnail
        sermonCount: 60,
        dateRange: "November 2023 - Present",
        status: "current",
        verses: "Romans 1-16"
    },
    {
        id: 2,
        title: "The Gospel According to Mark",
        description: "Discovering Jesus as the suffering servant through Mark's fast-paced narrative of Christ's earthly ministry.",
        playlistId: "PLexample2",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        sermonCount: 32,
        dateRange: "March 2022 - December 2022",
        status: "completed",
        verses: "Mark 1-16"
    },
    {
        id: 3,
        title: "The Psalms: Songs of Faith",
        description: "Exploring selected psalms and learning to worship, lament, and praise God through the poetry of Scripture.",
        playlistId: "PLexample3",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        sermonCount: 18,
        dateRange: "August 2021 - February 2022",
        status: "completed",
        verses: "Selected Psalms"
    },
    {
        id: 4,
        title: "1 Peter: Hope in Suffering",
        description: "Finding hope and perseverance in the midst of trials through Peter's first letter to scattered believers.",
        playlistId: "PLexample4",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
        sermonCount: 12,
        dateRange: "January 2021 - July 2021",
        status: "completed",
        verses: "1 Peter 1-5"
    }
];

// Individual sermons for the current series (Romans)
const recentSermons = [
    {
        id: 1,
        title: "The Righteousness of God Revealed",
        videoId: "dQw4w9WgXcQ", // YouTube video ID
        date: "January 21, 2025",
        series: "Romans: The Gospel of God",
        passage: "Romans 1:16-17",
        description: "Paul introduces the central theme of Romans: the righteousness of God revealed in the gospel."
    },
    {
        id: 2,
        title: "The Universal Need for Salvation",
        videoId: "dQw4w9WgXcQ",
        date: "January 14, 2025",
        series: "Romans: The Gospel of God",
        passage: "Romans 1:18-32",
        description: "Understanding humanity's fallen condition and desperate need for God's salvation."
    },
    {
        id: 3,
        title: "God's Impartial Judgment",
        videoId: "dQw4w9WgXcQ",
        date: "January 7, 2025",
        series: "Romans: The Gospel of God",
        passage: "Romans 2:1-16",
        description: "Paul demonstrates that all people, both Jews and Gentiles, stand under God's righteous judgment."
    }
];

export default function Sermons() {
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'current' | 'completed'>('all');

    const filteredSeries = sermonSeries.filter(series => {
        if (selectedFilter === 'all') return true;
        return series.status === selectedFilter;
    });

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
                            Listen to God's Word faithfully preached through verse-by-verse exposition of Scripture.
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentSermons.map((sermon) => (
                            <div key={sermon.id} className="bg-white border border-warm rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                {/* YouTube Thumbnail */}
                                <div className="relative aspect-video bg-warm">
                                    <img
                                        src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`}
                                        alt={sermon.title}
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
                                <div className="relative">
                                    <img
                                        src={series.thumbnail}
                                        alt={series.title}
                                        className="w-full h-48 object-cover"
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
                        "All Scripture is breathed out by God and profitable for teaching, for reproof, for correction, and for training in righteousness, that the man of God may be complete, equipped for every good work."
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
                        Experience the preaching of God's Word in person every Sunday morning.
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