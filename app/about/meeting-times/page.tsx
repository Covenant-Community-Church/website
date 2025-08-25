export default function MeetingTimes() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            Service Times
                        </h1>
                        <blockquote className="text-lg md:text-xl text-brown italic leading-relaxed mb-4 font-body">
                            "And let us consider how to stir up one another to love and good works,
                            not neglecting to meet together, as is the habit of some, but encouraging one another,
                            and all the more as you see the Day drawing near."
                        </blockquote>
                        <cite className="text-navy font-medium font-body">Hebrews 10:24-25</cite>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Sundays Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-8 text-center">
                            Sundays (The Lord's Day)
                        </h2>

                        <div className="bg-warm rounded-2xl p-6 mb-12 text-center">
                            <p className="text-lg text-brown mb-2 font-body">
                                We meet every Sunday at <strong>5104 E Stevenson Ave in Chillicothe, IL</strong>
                            </p>
                            <p className="text-brown font-body">All are welcome to join us.</p>
                        </div>

                        {/* Sunday Schedule */}
                        <div className="grid lg:grid-cols-3 gap-8 mb-12">

                            {/* Sunday School */}
                            <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-brown mb-2">Sunday School</h3>
                                    <p className="text-2xl font-bold text-navy font-body">9:00-10:00</p>
                                </div>
                                <p className="text-brown text-sm leading-relaxed font-body">
                                    Our Sunday school hour is largely focused on discipleship and is one of our main contexts for teaching outside of corporate worship. We presently have one adult Sunday School class that meets in the sanctuary and the current topic is <em>God Is: Understanding the Nature and Character of God</em>. All ages are welcome to join the adult class. There is children's programming for ages 0-18 during the Sunday school hour as well. Children's Sunday School typically includes a bible lesson, singing songs, and catechism memorization at age-appropriate levels.
                                </p>
                            </div>

                            {/* Worship Service */}
                            <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-brown mb-2">Worship Service</h3>
                                    <p className="text-2xl font-bold text-navy font-body">10:30-12:00</p>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <h4 className="font-semibold text-brown mb-1 font-heading">The Word Read</h4>
                                        <p className="text-brown font-body">Whether it is God calling us to worship, the confession of our sin, or the assurance of pardon, all that we do on a Sunday is focused on the Word.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-brown mb-1 font-heading">The Word Preached</h4>
                                        <p className="text-brown font-body"><em>(Currently preaching through Romans)</em></p>
                                        <p className="text-brown font-body">The preaching of the Word is the public proclamation of the good news of the Gospel from the Scriptures. We preach verse by verse through books of the Bible.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-brown mb-1 font-heading">The Word Prayed</h4>
                                        <p className="text-brown font-body">As a chief part of our thankfulness, we respond to God's goodness with reverent, biblically informed, Trinitarian, Spirit-filled, Christ-mediated prayer.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Evening Service */}
                            <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-brown mb-2">Evening Service</h3>
                                    <p className="text-2xl font-bold text-navy font-body">6:00-7:00</p>
                                </div>
                                <p className="text-brown text-sm leading-relaxed font-body">
                                    Our evening service provides another opportunity for corporate worship, prayer, and the preaching of God's Word. This service typically has a more intimate setting and includes congregational prayer time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}