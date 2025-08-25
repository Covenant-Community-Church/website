'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cross, Crown, Users, GraduationCap, ArrowRight, X } from 'lucide-react';

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
        name: "Luke Knapp",
        title: "Elder",
        image: "/leadership/luke-knapp.png",
        bio: "",
        status: "elder"
    },
    {
        id: 3,
        name: "Billy Beach",
        title: "Elder Candidate",
        image: "/leadership/billy-beach.png",
        bio: "",
        status: "candidate"
    }
];

const deacons: Deacon[] = [
    {
        id: 1,
        name: "Lloyd Robinson",
        title: "Deacon",
        image: "/leadership/lloyd-robinson.png",
        bio: ""
    },
    {
        id: 2,
        name: "Paul Grimm",
        title: "Deacon",
        image: "/leadership/paul-grimm.png",
        bio: ""
    },
    {
        id: 3,
        name: "John Schick",
        title: "Deacon",
        image: "/leadership/john-schick.png",
        bio: ""
    },
    {
        id: 4,
        name: "Travis Critten",
        title: "Deacon",
        image: "/leadership/travis-critten.png",
        bio: ""
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
                                <Cross className="w-8 h-8 text-white" />
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
                            <Crown className="w-8 h-8 text-navy" />
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
                                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
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
                            <Users className="w-8 h-8 text-navy" />
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

                                        {/*<button*/}
                                        {/*    onClick={() => setSelectedPerson(deacon)}*/}
                                        {/*    className="text-navy hover:text-brown font-body font-medium transition-colors text-sm"*/}
                                        {/*>*/}
                                        {/*    Read More*/}
                                        {/*</button>*/}
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
                        <GraduationCap className="w-12 h-12 text-white" />
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
                                <X className="w-6 h-6 text-gray-600" />
                            </button>

                            <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl">
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