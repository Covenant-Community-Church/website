'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-warm shadow-sm border-b border-warm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            {/* Mobile: Show only SVG */}
                            <div className="md:hidden w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/covenant-cross-navy.svg"
                                    alt="Covenant Community Church Cross"
                                    width={40}
                                    height={40}
                                    className="w-full h-full"
                                />
                            </div>

                            {/* Desktop: Show full text */}
                            <div className="w-12 h-12 flex-shrink-0">
                                <Image
                                    src="/covenant-cross-navy.svg"
                                    alt="Covenant Community Church Cross"
                                    width={48}
                                    height={48}
                                    className="w-full h-full"
                                />
                            </div>
                            <h1 className="text-3xl font-bold text-navy font-heading">
                                Covenant Community
                            </h1>

                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <div className="relative group">
                                <button className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                    About Us
                                </button>
                                <div
                                    className="absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-warm">
                                    <div className="py-1">
                                        <a href="/meeting-times"
                                           className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Meeting
                                            Times</a>
                                        <a href="/leadership"
                                           className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            Leadership</a>
                                        <a href="/history"
                                           className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            History</a>
                                        <a href="/beliefs"
                                           className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            Beliefs</a>
                                        <a href="/faq"
                                           className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">FAQ</a>
                                    </div>
                                </div>
                            </div>

                            <a href="/care-groups"
                               className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                Care Groups
                            </a>

                            <a href="/contact"
                               className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                Contact Us
                            </a>

                            <a href="/sermons"
                               className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                Sermons
                            </a>

                            <a href="https://covenantcc.churchcenter.com/giving"
                               className="bg-navy hover:bg-navy/90 text-white px-5 py-2 rounded-2xl text-base font-medium font-body">
                                Give
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-brown hover:text-navy p-2"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg border border-warm">
                            {/* About Us Section */}
                            <div className="border-b border-warm pb-2 mb-2">
                                <div className="px-3 py-3 text-base font-medium text-navy font-body">About Us</div>
                                <a href="/meeting-times"
                                   className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                   onClick={() => setIsMobileMenuOpen(false)}>
                                    Meeting Times
                                </a>
                                <a href="/leadership"
                                   className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                   onClick={() => setIsMobileMenuOpen(false)}>
                                    Our Leadership
                                </a>
                                <a href="/history"
                                   className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                   onClick={() => setIsMobileMenuOpen(false)}>
                                    Our History
                                </a>
                                <a href="/beliefs"
                                   className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                   onClick={() => setIsMobileMenuOpen(false)}>
                                    Our Beliefs
                                </a>
                                <a href="/faq"
                                   className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                   onClick={() => setIsMobileMenuOpen(false)}>
                                    FAQ
                                </a>
                            </div>

                            <a href="/care-groups"
                               className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                               onClick={() => setIsMobileMenuOpen(false)}>
                                Care Groups
                            </a>

                            <a href="/contact"
                               className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                               onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </a>

                            <a href="/sermons"
                               className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                               onClick={() => setIsMobileMenuOpen(false)}>
                                Sermons
                            </a>

                            <a href="https://covenantcc.churchcenter.com/giving"
                               className="block bg-navy hover:bg-navy/90 text-white px-3 py-3 rounded-2xl text-base font-medium font-body mx-3 mt-3 text-center"
                               onClick={() => setIsMobileMenuOpen(false)}>
                                Give
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}