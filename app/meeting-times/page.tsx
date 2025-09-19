import PageHeader from "@/components/PageHeader";
import MeetingCard from "@/components/MeetingCard";

export default function MeetingTimes() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Meeting Times"
                scripture={{
                    text: "And let us consider how to stir up one another to love and good works, " +
                        "not neglecting to meet together, as is the habit of some, but encouraging one another, " +
                        "and all the more as you see the Day drawing near",
                    reference: "Hebrews 10:24-25"
                }}
            />

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Location Banner */}
                    <div className="bg-warm rounded-2xl p-6 mb-16 text-center">
                        <p className="text-lg text-brown mb-2 font-body">
                            We meet every Sunday at <strong>5104 E Stevenson Ave in Chillicothe, IL</strong>
                        </p>
                        <p className="text-brown font-body">All are welcome to join us.</p>
                    </div>

                    {/* Sunday Services */}
                    <div className="mb-20">
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <MeetingCard
                                icon={
                                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                }
                                title="Sunday School"
                                day="Sundays"
                                time="9:00-10:00"
                                description="Our Sunday school hour is largely focused on discipleship and is one of our main contexts for teaching outside of corporate worship. We presently have one adult Sunday School class that meets in the sanctuary and the current topic is God Is: Understanding the Nature and Character of God. All ages are welcome to join the adult class. There is children’s programming for ages 0-18 during the Sunday school hour as well. Children’s Sunday School typically includes a bible lesson, singing songs, and catechism memorization at age-appropriate levels."
                            />

                            <MeetingCard
                                icon={
                                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                }
                                title="Worship Service"
                                day="Sundays"
                                time="10:30-12:00"
                                description={
                                    <div className="space-y-3">
                                        <div>
                                            <h4 className="font-semibold text-brown mb-1 font-heading">The Word Read</h4>
                                            <p>Whether it is God calling us to worship, the confession of our sin, or the assurance of pardon, all that we do on a Sunday is focused on the Word.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-brown mb-1 font-heading">The Word Preached</h4>
                                            <p>The preaching of the Word is the public proclamation of the good news of the Gospel from the Scriptures. We preach verse by verse through books of the Bible.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-brown mb-1 font-heading">The Word Prayed</h4>
                                            <p>As a chief part of our thankfulness, we respond to God&apos;s goodness with reverent, biblically informed, Trinitarian, Spirit-filled, Christ-mediated prayer.</p>
                                        </div>
                                    </div>
                                }
                            />
                            <MeetingCard
                                icon={
                                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                }
                                title="Fellowship Meal"
                                day="Sundays"
                                time="12:30"
                                description="Join us for our fellowship meal immediately following the worship service. This is a wonderful time for our church family to gather together, share a meal, and enjoy fellowship with one another."
                            />
                            <MeetingCard
                                icon={
                                    <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                }
                                title="Prayer Meeting"
                                day="Wednesdays"
                                time="6:00-7:30"
                                description="The first three Wednesdays of every month, we gather together in prayer. We pray prayers of adoration, confession, thanksgiving, and supplication. This is a great time of beseaching the Lord on eachother's behalf and is vital to our church."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
