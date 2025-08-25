'use client';

import { useState } from 'react';
import Image from 'next/image';

// Type definitions
interface Elder {
    id: number;
    name: string;
    title: string;
    image: string;
    bio: string;
    status: 'elder' | 'candidate';
}

interface Deacon {
    id: number;
    name: string;
    title: string;
    image: string;
    bio: string;
}

type LeadershipPerson = Elder | Deacon;

// Leadership data with image references
const elders: Elder[] = [
    {
        id: 1,
        name: "Jordan Embree",
        title: "Elder",
        image: "/leadership/jordan-embree.png",
        bio: "Pastor Jordan was on staff at Bethany Community Church in Washington, IL (our sending church) as the church plant pastor prior to being called to help re-plant CCC. Before his time at Bethany, he was a pastor at Christ Community Church in Blaine, WA. He completed his undergraduate work at the University of Northwestern, St. Paul in 2012 and majored in Youth and Family Studies. After undergrad, he stayed at Northwestern for seminary and studied in the dual master's program (MATS/MDIV) with an emphasis in Biblical Exposition.\n" +
            "\n" + "\n" +
            "Jordan and his wife, Leah, have five boys, Haddon, Knox, RJ (who is with the Lord), Brooks, Kiffin, and Ames. In addition to pastoral work, Jordan enjoys spending time with his boys, date nights with his wife, reading, grilling meat, following Minnesota sports, and any competition.\n" +
            "\n" + "\n" +
            "To contact Jordan, send an email to office@covenantcommunity.org.",
        status: "elder"
    },
    {
        id: 2,
        name: "Billy Beach",
        title: "Elder Candidate",
        image: "/leadership/billy-beach.png",
        bio: "Billy is currently in the process of elder candidacy and has demonstrated faithful service in various ministry capacities.",
        status: "candidate"
    },
    {
        id: 3,
        name: "Luke Knapp",
        title: "Elder",
        image: "/leadership/luke-knapp.png",
        bio: "Luke brings wisdom and pastoral care to the elder team, with a heart for shepherding God's people.",
        status: "elder"
    }
];

const deacons: Deacon[] = [
    {
        id: 1,
        name: "John Schick",
        title: "Deacon",
        image: "/leadership/john-schick.png",
        bio: "John faithfully serves the practical needs of the congregation with dedication and integrity."
    },
    {
        id: 2,
        name: "Lloyd Robinson",
        title: "Deacon",
        image: "/leadership/lloyd-robinson.png",
        bio: "Lloyd demonstrates servant leadership in his deacon ministry and care for church members."
    }
];

export default function Leadership() {
    const [selectedPerson, setSelectedPerson] = useState<LeadershipPerson | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Classical Elements */}
            <section className="relative bg-gradient-to-b from-warm via-white to-white py-20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAtNDAgMCAwIC00MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjZGM0VBIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        {/* Decorative Cross Element */}
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L10.5 3.5L8 6H16L13.5 3.5L12 2ZM12 22L13.5 20.5L16 18H8L10.5 20.5L12 22ZM2 12L3.5 10.5L6 8V16L3.5 13.5L2 12ZM22 12L20.5 13.5L18 16V8L20.5 10.5L22 12ZM12 6C9.79 6 8 7.79 8 10S9.79 14 12 14 16 12.21 16 10 14.21 6 12 6Z"/>
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-heading font-bold text-brown mb-6 tracking-tight">
                            Our Leadership
                        </h1>
                        <div className="w-24 h-1 bg-navy mx-auto mb-8"></div>
                        <p className="text-xl text-brown max-w-3xl mx-auto font-body leading-relaxed">
                            &#34;Remember your leaders, those who spoke to you the word of God. Consider the outcome of their way of life, and imitate their faith.&#34;
                        </p>
                        <cite className="block text-navy font-medium mt-4 font-body">Hebrews 13:7</cite>
                    </div>
                </div>
            </section>

            {/* Elders Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-12 h-0.5 bg-navy mr-4"></div>
                            <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 3.5C14.8 3.3 14.4 3 14 3H10C9.6 3 9.2 3.3 9 3.5L3 7V9H4.2L5.2 19C5.3 19.6 5.8 20 6.4 20H17.6C18.2 20 18.7 19.6 18.8 19L19.8 9H21Z"/>
                            </svg>
                            <div className="w-12 h-0.5 bg-navy ml-4"></div>
                        </div>
                        <h2 className="text-4xl font-heading font-bold text-brown mb-6">Elders</h2>
                        <p className="text-lg text-brown max-w-4xl mx-auto font-body leading-relaxed">
                            Our elders are men who meet the biblical qualifications outlined in 1 Timothy 3 and Titus 1.
                            They are called to shepherd the flock with diligence, wisdom, and unwavering commitment to sound doctrine,
                            leading by example in godliness and faithfulness to Christ.
                        </p>
                    </div>

                    {/* Elder Profiles */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {elders.map((elder) => (
                            <div key={elder.id} className="group relative">
                                {/* Profile Card */}
                                <div className="bg-white border-2 border-warm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-navy">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={elder.image}
                                            alt={elder.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        {/* Status Badge */}
                                        {elder.status === 'candidate' && (
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-warm text-brown border-2 border-brown font-body">
                                                    Candidate
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-2xl font-heading font-bold text-brown mb-2 group-hover:text-navy transition-colors">
                                            {elder.name}
                                        </h3>
                                        <p className="text-navy font-medium mb-4 font-body uppercase tracking-wide text-sm">
                                            {elder.title}
                                        </p>

                                        {/* Decorative Element */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-12 h-0.5 bg-navy group-hover:w-16 transition-all duration-300"></div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedPerson(elder)}
                                            className="inline-flex items-center text-navy hover:text-brown font-body font-medium transition-colors group"
                                        >
                                            Read Biography
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deacons Section */}
            <section className="py-20 bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center mb-6">
                            <div className="w-12 h-0.5 bg-navy mr-4"></div>
                            <svg className="w-8 h-8 text-navy" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 4C18.2 4 20 5.8 20 8S18.2 12 16 12 12 10.2 12 8 13.8 4 16 4M16 14C18.7 14 24 15.3 24 18V20H8V18C8 15.3 13.3 14 16 14M8.5 4C10.7 4 12.5 5.8 12.5 8S10.7 12 8.5 12 4.5 10.2 4.5 8 6.3 4 8.5 4M8.5 14C11.2 14 16.5 15.3 16.5 18V20H.5V18C.5 15.3 5.8 14 8.5 14Z"/>
                            </svg>
                            <div className="w-12 h-0.5 bg-navy ml-4"></div>
                        </div>
                        <h2 className="text-4xl font-heading font-bold text-brown mb-6">Deacons</h2>
                        <p className="text-lg text-brown max-w-4xl mx-auto font-body leading-relaxed">
                            Our deacons are men of good reputation, full of the Holy Spirit and wisdom, who serve the church
                            by meeting practical needs and supporting the ministry of the elders, following the biblical pattern
                            established in Acts 6 and outlined in 1 Timothy 3.
                        </p>
                    </div>

                    {/* Deacon Profiles */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {deacons.map((deacon) => (
                            <div key={deacon.id} className="group">
                                <div className="bg-white border-2 border-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-navy">
                                    {/* Image Container */}
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={deacon.image}
                                            alt={deacon.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-heading font-bold text-brown mb-2 group-hover:text-navy transition-colors">
                                            {deacon.name}
                                        </h3>
                                        <p className="text-navy font-medium mb-3 font-body uppercase tracking-wide text-sm">
                                            {deacon.title}
                                        </p>

                                        <div className="flex justify-center mb-3">
                                            <div className="w-8 h-0.5 bg-navy group-hover:w-12 transition-all duration-300"></div>
                                        </div>

                                        <button
                                            onClick={() => setSelectedPerson(deacon)}
                                            className="text-navy hover:text-brown font-body font-medium transition-colors text-sm"
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Biblical Foundation */}
            <section className="py-20 bg-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iY3Jvc3MiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMS41IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjY3Jvc3MpIi8+PC9zdmc+')] opacity-50"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center mb-8">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9L12 15L21 12.09V17H23V9L12 3ZM5 13.18V17.18C5 19.84 8.24 22 12 22S19 19.84 19 17.18V13.18L12 17L5 13.18Z"/>
                        </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Biblical Leadership</h2>
                    <div className="max-w-4xl mx-auto">
                        <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6 font-body">
                            &#34;Pay careful attention to yourselves and to all the flock, in which the Holy Spirit has made you overseers,
                            to care for the church of God, which he obtained with his own blood.&#34;
                        </blockquote>
                        <cite className="text-lg font-medium opacity-90 font-body">Acts 20:28</cite>
                    </div>
                </div>
            </section>

            {/* Bio Modal */}
            {selectedPerson && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative aspect-[3/2] overflow-hidden rounded-t-2xl">
                                <Image
                                    src={selectedPerson.image}
                                    alt={selectedPerson.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brown/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-3xl font-heading font-bold mb-2">{selectedPerson.name}</h3>
                                    <p className="text-xl font-body opacity-90">{selectedPerson.title}</p>
                                </div>
                            </div>

                            <div className="p-8">
                                <p className="text-brown font-body text-lg leading-relaxed">{selectedPerson.bio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}