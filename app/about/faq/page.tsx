export default function FAQ() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            FAQs
                        </h1>
                        <p className="text-lg text-brown max-w-2xl mx-auto font-body">
                            Common questions about our church, worship, and beliefs
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">

                        {/* Question 1 */}
                        <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-warm rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-heading font-bold text-brown mb-3">
                                        Is there a dress code?
                                    </h3>
                                    <p className="text-brown leading-relaxed font-body">
                                        Most of our congregation dresses in a &#34;business casual&#34; style, but please feel free to come in whatever you&#39;re comfortable in as long as it is modest.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-warm rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-heading font-bold text-brown mb-3">
                                        What if my children cry or are disruptive during the worship service?
                                    </h3>
                                    <p className="text-brown leading-relaxed font-body">
                                        We want the whole family to be together during worship on Sunday mornings. If that means a little noise, that&#39;s okay! We understand kids are often unpredictable and many of our families are in a similar stage of parenting where we are training our children to sit in the worship service quietly and attentively.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 3 */}
                        <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-warm rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4 flex-grow">
                                    <h3 className="text-xl font-heading font-bold text-brown mb-3">
                                        What is the Regulative Principle of Worship?
                                    </h3>
                                    <div className="space-y-3">
                                        <p className="text-brown leading-relaxed font-body">
                                            The Regulative Principle of Worship (RPW) is the practice of worshiping God only in the manner He has commanded us in His Word.
                                        </p>
                                        <div className="bg-warm border-l-4 border-navy p-4 rounded-r-2xl">
                                            <p className="text-brown italic text-sm leading-relaxed font-body">
                                                &#34;But the acceptable way of worshipping the true God is instituted by himself, and so limited to his own revealed will, that he may not be worshipped according to the imaginations and devices of men, or any other way not prescribed in the Holy Scripture&#34;
                                            </p>
                                            <cite className="text-navy font-medium text-sm mt-2 block font-body">
                                                1689 Confession of Faith (22.1)
                                            </cite>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Add more FAQ items as needed */}
                    </div>
                </div>
            </section>
        </div>
    );
}