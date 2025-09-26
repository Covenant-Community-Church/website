'use client';

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="section-accent shadow-sm border-b border-warm">
            <nav className="container-max">
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
                            <div className="hidden md:block w-12 h-12 flex-shrink-0">
                                <Image
                                    src="/covenant-cross-navy.svg"
                                    alt="Covenant Community Church Cross"
                                    width={48}
                                    height={48}
                                    className="w-full h-full"
                                />
                            </div>
                            <h1 className="hidden md:block text-3xl font-bold text-navy font-heading">
                                COVENANT
                            </h1>
                            <h1 className="hidden md:block text-3xl font-regular text-navy font-heading">
                                &nbsp; Community Church
                            </h1>

                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <div
                                className="relative group"
                                onMouseLeave={() => setIsAboutOpen(false)}
                            >
                                <button
                                    className="btn-tertiary"
                                    onClick={() => setIsAboutOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={isAboutOpen}
                                    aria-controls="about-desktop-menu"
                                >
                                    About Us
                                </button>
                                <div
                                    id="about-desktop-menu"
                                    className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg z-10 border border-warm transition-all duration-200 ${isAboutOpen
                                        ? 'opacity-100 visible'
                                        : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                                        }`}
                                >
                                    <div className="py-1">
                                        <Link href="/meeting-times"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Meeting
                                            Times</Link>
                                        <Link href="/leadership"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            Leadership</Link>
                                        <Link href="/history"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            History</Link>
                                        <Link href="/beliefs"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Our
                                            Beliefs</Link>
                                        <Link href="/faq"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">FAQ</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="/care-groups"
                                className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                Care Groups
                            </Link>

                            <Link href="/contact"
                                className="text-brown hover:text-navy px-3 py-2 text-base font-medium font-body">
                                Contact Us
                            </Link>

                            <div
                                className="relative group"
                                onMouseLeave={() => setIsResourcesOpen(false)}
                            >
                                <button
                                    className="btn-tertiary"
                                    onClick={() => setIsResourcesOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={isResourcesOpen}
                                    aria-controls="about-desktop-menu"
                                >
                                    Resources
                                </button>
                                <div
                                    id="about-desktop-menu"
                                    className={`absolute left-0 mt-2 w-52 bg-white rounded-lg shadow-lg z-10 border border-warm transition-all duration-200 ${isResourcesOpen
                                        ? 'opacity-100 visible'
                                        : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                                        }`}
                                >
                                    <div className="py-1">
                                        <Link href="/sermons"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Sermons</Link>
                                        <Link href="/family-worship"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Family Worship Guides</Link>
                                        <Link href="/blog"
                                            className="block px-4 py-3 text-base text-brown hover:bg-warm font-body">Blog</Link>
                                    </div>
                                </div>
                            </div>

                            <a href="https://covenantcc.churchcenter.com/giving"
                                className="btn-primary">
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
                                        d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16" />
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
                                <button
                                    className="w-full text-left px-3 py-3 text-base font-medium text-navy font-body"
                                    onClick={() => setIsAboutOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={isAboutOpen}
                                    aria-controls="about-mobile-menu"
                                >
                                    About Us
                                </button>
                                {isAboutOpen && (
                                    <div id="about-mobile-menu">
                                        <Link href="/meeting-times"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(false); }}>
                                            Meeting Times
                                        </Link>
                                        <Link href="/leadership"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(false); }}>
                                            Our Leadership
                                        </Link>
                                        <Link href="/history"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(false); }}>
                                            Our History
                                        </Link>
                                        <Link href="/beliefs"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(false); }}>
                                            Our Beliefs
                                        </Link>
                                        <Link href="/faq"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsAboutOpen(false); }}>
                                            FAQ
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link href="/care-groups"
                                className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                Care Groups
                            </Link>

                            <Link href="/contact"
                                className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Us
                            </Link>

                            <Link href="/sermons"
                                className="block px-3 py-3 text-base text-brown hover:bg-warm font-body rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}>
                                Sermons
                            </Link>
                            <div className="border-b border-warm pb-2 mb-2">
                                <button
                                    className="w-full text-left px-3 py-3 text-base font-medium text-navy font-body"
                                    onClick={() => setIsResourcesOpen((v) => !v)}
                                    aria-haspopup="true"
                                    aria-expanded={isResourcesOpen}
                                    aria-controls="about-mobile-menu"
                                >
                                    Resources
                                </button>
                                {isResourcesOpen && (
                                    <div id="about-mobile-menu">
                                        <Link href="/sermons"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsResourcesOpen(false); }}>
                                            Sermons
                                        </Link>
                                        <Link href="/family-worship"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsResourcesOpen(false); }}>
                                            Family Worship Guides
                                        </Link>
                                        <Link href="/blog"
                                            className="block px-6 py-3 text-base text-brown hover:bg-warm font-body"
                                            onClick={() => { setIsMobileMenuOpen(false); setIsResourcesOpen(false); }}>
                                            Blog
                                        </Link>
                                    </div>
                                )}
                            </div>

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