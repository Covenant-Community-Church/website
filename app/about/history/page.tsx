export default function History() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            Our History
                        </h1>
                        <p className="text-lg text-brown max-w-2xl mx-auto font-body">
                            The story of God&#39;s faithfulness in bringing together two congregations to form Covenant Community Church
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy/30 hidden md:block"></div>

                        <div className="space-y-12">
                            {/* June 2022 */}
                            <div className="relative flex items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-warm rounded-full flex items-center justify-center relative z-10 md:mr-8">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div className="flex-grow bg-white border border-warm rounded-2xl p-6 shadow-sm ml-4 md:ml-0">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-semibold text-navy bg-warm px-3 py-1 rounded-full font-body">
                                          June 2022
                                        </span>
                                    </div>
                                    <p className="text-brown leading-relaxed font-body">
                                        Rome Baptist Church (Chillicothe, IL) and Bethany Community Church (Washington, IL) began praying together about a potential partnership for gospel ministry in Central IL
                                    </p>
                                </div>
                            </div>

                            {/* August 2022 */}
                            <div className="relative flex items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-warm rounded-full flex items-center justify-center relative z-10 md:mr-8">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div className="flex-grow bg-white border border-warm rounded-2xl p-6 shadow-sm ml-4 md:ml-0">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-semibold text-navy bg-warm px-3 py-1 rounded-full font-body">
                                          August 2022
                                        </span>
                                    </div>
                                    <p className="text-brown leading-relaxed font-body">
                                        The two congregations began intentionally developing relationships as they pursued the likelihood of partnering together.
                                    </p>
                                </div>
                            </div>

                            {/* December 2022 */}
                            <div className="relative flex items-start">
                                <div className="flex-shrink-0 w-16 h-16 bg-warm rounded-full flex items-center justify-center relative z-10 md:mr-8">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-grow bg-white border border-warm rounded-2xl p-6 shadow-sm ml-4 md:ml-0">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-semibold text-navy bg-warm px-3 py-1 rounded-full font-body">
                                          December 2022
                                        </span>
                                    </div>
                                    <p className="text-brown leading-relaxed font-body">
                                        It became clear that the Lord was leading both congregations to link arms together in formal partnership as they pursued the vision to re-plant RBC.
                                    </p>
                                </div>
                            </div>

                            {/* Add more timeline items as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}