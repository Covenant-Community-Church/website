'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import PageHeader from "@/components/PageHeader";

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
    status: 'deacon' | 'candidate';
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
            "Jordan and his wife, Leah, have six boys, Haddon, Knox, RJ (who is with the Lord), Brooks, Kiffin, and Ames. In addition to pastoral work, Jordan enjoys spending time with his boys, date nights with his wife, reading, grilling meat, following Minnesota sports, and any competition.\n" +
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
        title: "Elder",
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
        bio: "",
        status: "deacon"
    },
    {
        id: 2,
        name: "Paul Grimm",
        title: "Deacon",
        image: "/leadership/paul-grimm.png",
        bio: "",
        status: "deacon"
    },
    {
        id: 3,
        name: "John Schick",
        title: "Deacon",
        image: "/leadership/john-schick.png",
        bio: "",
        status: "deacon"
    },
    {
        id: 4,
        name: "Travis Critten",
        title: "Deacon",
        image: "/leadership/travis-critten.png",
        bio: "",
        status: "deacon"
    },
    {
        id: 5,
        name: "Matt Lossmann",
        title: "Deacon",
        image: "/leadership/matt-lossman.png",
        bio: "",
        status: "candidate"
    }
];

export default function Leadership() {
    const [selectedPerson, setSelectedPerson] = useState<LeadershipPerson | null>(null);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Classical Elements */}
            <PageHeader
                title="Our Leadership"
            />

            {/* Elders Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
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

                                        {/* Conditional Biography Button */}
                                        {elder.bio && elder.bio.trim() !== "" && (
                                            <button
                                                onClick={() => setSelectedPerson(elder)}
                                                className="inline-flex items-center text-navy hover:text-brown font-body font-medium transition-colors group"
                                            >
                                                Read Biography
                                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        )}
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
                                        {deacon.status === 'candidate' && (
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-warm text-brown border-2 border-brown font-body">
                                                    Candidate
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-heading font-bold text-brown mb-2 group-hover:text-navy transition-colors">
                                            {deacon.name}
                                        </h3>
                                        <p className="text-navy font-medium mb-4 font-body uppercase tracking-wide text-sm">
                                            {deacon.title}
                                        </p>

                                        {/* Decorative Element */}
                                        <div className="flex justify-center mb-4">
                                            <div className="w-8 h-0.5 bg-navy group-hover:w-12 transition-all duration-300"></div>
                                        </div>

                                        {/* Conditional Biography Button */}
                                        {deacon.bio && deacon.bio.trim() !== "" && (
                                            <button
                                                onClick={() => setSelectedPerson(deacon)}
                                                className="inline-flex items-center text-navy hover:text-brown font-body font-medium transition-colors group"
                                            >
                                                Read Biography
                                                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Biography Modal */}
            {selectedPerson && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-warm px-6 py-4 flex justify-between items-center rounded-t-2xl">
                            <div>
                                <h3 className="text-2xl font-heading font-bold text-brown">
                                    {selectedPerson.name}
                                </h3>
                                <p className="text-navy font-body font-medium">
                                    {selectedPerson.title}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedPerson(null)}
                                className="text-brown hover:text-navy transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/3">
                                    <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                                        <Image
                                            src={selectedPerson.image}
                                            alt={selectedPerson.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <div className="prose prose-brown max-w-none">
                                        {selectedPerson.bio.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-brown font-body leading-relaxed mb-4">
                                                {paragraph.trim()}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
