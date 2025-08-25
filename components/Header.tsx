import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="bg-warm shadow-sm border-b border-warm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <h1 className="text-xl font-bold text-navy font-heading">
                                Covenant Community Church
                            </h1>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <div className="relative group">
                                <button className="text-brown hover:text-navy px-3 py-2 text-sm font-medium font-body">
                                    About Us
                                </button>
                                <div
                                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-warm">
                                    <div className="py-1">
                                        <a href="/about/meeting-times"
                                           className="block px-4 py-2 text-sm text-brown hover:bg-warm font-body">Meeting
                                            Times</a>
                                        <a href="/about/leadership"
                                           className="block px-4 py-2 text-sm text-brown hover:bg-warm font-body">Our
                                            Leadership</a>
                                        <a href="/about/history"
                                           className="block px-4 py-2 text-sm text-brown hover:bg-warm font-body">Our
                                            History</a>
                                        <a href="/about/beliefs"
                                           className="block px-4 py-2 text-sm text-brown hover:bg-warm font-body">Our
                                            Beliefs</a>
                                        <a href="/about/faq"
                                           className="block px-4 py-2 text-sm text-brown hover:bg-warm font-body">FAQ</a>
                                    </div>
                                </div>
                            </div>

                            <a href="/care-groups"
                               className="text-brown hover:text-navy px-3 py-2 text-sm font-medium font-body">
                                Care Groups
                            </a>

                            <a href="/contact"
                               className="text-brown hover:text-navy px-3 py-2 text-sm font-medium font-body">
                                Contact Us
                            </a>

                            <a href="/sermons"
                               className="text-brown hover:text-navy px-3 py-2 text-sm font-medium font-body">
                                Sermons
                            </a>

                            <a href="https://covenantcc.churchcenter.com/giving"
                               className="bg-navy hover:bg-navy/90 text-white px-4 py-2 rounded-2xl text-sm font-medium font-body">
                                Give
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-brown hover:text-navy p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

