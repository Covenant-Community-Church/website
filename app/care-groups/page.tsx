
export default function CareGroups() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            Care Groups
                        </h1>
                        <p className="text-lg text-brown max-w-2xl mx-auto font-body">
                            Creating intentional, personalized discipleship environments for believers at every stage of their journey
                        </p>
                    </div>
                </div>
            </section>

            {/* Purpose Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-6">
                            Our Purpose
                        </h2>
                    </div>

                    <div className="bg-warm rounded-2xl p-8 mb-12">
                        <p className="text-lg text-brown leading-relaxed text-center font-body">
                            The purpose of our Care Groups ministry is to create intentional, personalized discipleship environments that
                            <strong> welcome and cultivate new believers</strong>,
                            <strong> strengthen and develop disciples</strong>, and
                            <strong> produce future leaders</strong> (Rom 12:10).
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Study God&apos;s Word */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Study God&apos;s Word</h3>
                            <p className="text-brown text-sm leading-relaxed font-body">Together we dive deep into Scripture, encouraging one another in understanding and application.</p>
                        </div>

                        {/* Care for One Another */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Care for One Another</h3>
                            <p className="text-brown text-sm leading-relaxed font-body">We meet practical and spiritual needs, bearing one another&apos;s burdens in love.</p>
                        </div>

                        {/* Pray Together */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Pray Together</h3>
                            <p className="text-brown text-sm leading-relaxed font-body">We lift up our joys, concerns, and thanksgiving to God in corporate prayer.</p>
                        </div>

                        {/* Intentional Discipling */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Intentional Discipling</h3>
                            <p className="text-brown text-sm leading-relaxed font-body">We invest in one another&apos;s spiritual growth through encouragement and accountability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meeting Details */}
            <section className="py-16 bg-warm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">
                            When & Where We Meet
                        </h2>
                        <p className="text-lg text-brown font-body">
                            Our Care Groups provide flexible opportunities for deeper fellowship and growth
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Meeting Frequency */}
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-brown mb-2">Bi-Weekly Schedule</h3>
                            </div>
                            <p className="text-brown leading-relaxed text-center font-body">
                                Our care groups meet on a <strong>bi-weekly basis</strong>, allowing for consistent fellowship while respecting busy family schedules. This rhythm provides regular opportunities for growth without being overwhelming.
                            </p>
                        </div>

                        {/* Meeting Locations */}
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-brown mb-2">Various Locations</h3>
                            </div>
                            <div className="space-y-3 text-brown font-body">
                                <p className="text-center">Currently, we have:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                                        <span><strong>Three groups</strong> meeting in different homes</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                                        <span><strong>One group</strong> meeting at the church building<br />(5104 E Stevenson Ave)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 text-center">
                        <p className="text-brown text-lg font-body">
                            <strong>Flexible Timing:</strong> The time and day that each group meets differs from group to group,
                            allowing you to find a schedule that works for your family.
                        </p>
                    </div>
                </div>
            </section>

            {/* Scripture Section */}
            <section className="py-16 bg-navy text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-6 font-body">
                        &quot;Love one another with brotherly affection. Outdo one another in showing honor.&quot;
                    </blockquote>
                    <cite className="text-lg font-medium opacity-90 font-body">Romans 12:10</cite>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">
                            Who Benefits from Care Groups?
                        </h2>
                        <p className="text-lg text-brown font-body">
                            Our Care Groups are designed to serve believers at every stage of their spiritual journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* New Believers */}
                        <div className="bg-warm border border-warm rounded-2xl p-6">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-2">New Believers</h3>
                            </div>
                            <p className="text-brown text-sm leading-relaxed font-body">
                                Care Groups provide a <strong>welcoming environment</strong> where new believers can ask questions, learn fundamental truths,
                                and be lovingly guided in their first steps of faith.
                            </p>
                        </div>

                        {/* Growing Disciples */}
                        <div className="bg-warm border border-warm rounded-2xl p-6">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-2">Growing Disciples</h3>
                            </div>
                            <p className="text-brown text-sm leading-relaxed font-body">
                                Mature believers find <strong>strengthening and development</strong> through deeper Bible study,
                                meaningful fellowship, and opportunities to serve and encourage others.
                            </p>
                        </div>

                        {/* Future Leaders */}
                        <div className="bg-warm border border-warm rounded-2xl p-6">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-2">Future Leaders</h3>
                            </div>
                            <p className="text-brown text-sm leading-relaxed font-body">
                                Care Groups serve as a training ground where God <strong>develops future leaders</strong>,
                                providing opportunities to teach, shepherd, and serve within a smaller community context.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-warm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">
                            Ready to Join a Care Group?
                        </h2>
                        <p className="text-lg text-brown mb-8 font-body">
                            We&apos;d love to help you find the right Care Group for you and your family
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-warm p-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <p className="text-lg text-brown mb-6 font-body">
                                For more information about visiting or potentially joining a care group:
                            </p>
                            <a
                                href="mailto:caregroups@covenantcommunity.org"
                                className="inline-flex items-center px-8 py-3 bg-navy hover:bg-navy/90 text-white font-medium rounded-2xl text-lg transition-colors font-body"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                caregroups@covenantcommunity.org
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-brown text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-6">
                        Experience Biblical Community
                    </h2>
                    <p className="text-xl mb-8 font-body">
                        Care Groups are where lasting friendships are formed and spiritual growth accelerates through authentic Christian fellowship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:caregroups@covenantcommunity.org"
                            className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-2xl text-lg font-medium transition-colors font-body"
                        >
                            Join a Care Group
                        </a>
                        <a
                            href="/meeting-times"
                            className="border-2 border-white text-white hover:bg-white hover:text-brown px-8 py-3 rounded-2xl text-lg font-medium transition-colors font-body"
                        >
                            Visit This Sunday
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}