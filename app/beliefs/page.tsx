import PageHeader from "@/components/PageHeader";

export default function Beliefs() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Our Beliefs"
                description="We are committed to being thoroughly biblical in all aspects of our faith and life, holding fast to historic Christian doctrine."
            />

            {/* Core Theological Positions */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Protestant & Evangelical */}
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-4">Protestant & Evangelical</h3>
                            </div>
                            <p className="text-brown leading-relaxed text-sm font-body">
                                We are committed to being thoroughly biblical in all aspects of our faith and life. This commitment shapes our theology, where we hold fast to the historic doctrines of the faith that were once for all delivered to the saints (Jude 3). It governs our worship, which we conduct according to the Regulative Principle of Scripture, and it directs our church practice, centering our life together on the faithful administration of the Ordinary Means of Grace.
                            </p>
                        </div>

                        {/* Baptistic */}
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-4">Baptistic</h3>
                            </div>
                            <p className="text-brown leading-relaxed text-sm font-body">
                                As Baptists, we hold to particular biblical convictions regarding ecclesiology—the doctrine of the church. These convictions define our practice of church membership, which we believe is reserved only for those who make a credible profession of faith and have been baptized as believers. They likewise determine our understanding of church authority, as we affirm that the local church is autonomous under the headship of Christ, entrusted with the keys of the kingdom to be exercised in its government and discipline.
                            </p>
                        </div>

                        {/* Christ-Centered */}
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-warm rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-heading font-bold text-brown mb-4">Christ-Centered</h3>
                            </div>
                            <p className="text-brown leading-relaxed text-sm font-body">
                                We are fundamentally Christ-centered, aiming to make the glory of God in the gospel of Jesus Christ the focus of everything we do. This commitment defines our understanding of Scripture, where we affirm Christ as its overarching theme and ultimate goal. It governs our worship, making Him the central and supreme focus. Finally, it fuels our practice, with the gospel serving as the motivation for every aspect of our faith and life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Governing Documents */}
            <section className="py-16 bg-warm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-4">
                            Our Governing Documents
                        </h2>
                        <p className="text-lg text-brown font-body">
                            These documents guide our beliefs and practices as a church community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Confession of Faith */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-brown mb-4 text-center">1689 London Baptist Confession</h3>
                            </div>
                            <p className="text-brown leading-relaxed mb-6 font-body">
                                We hold to the 1689 London Baptist Confession of Faith as our doctrinal standard. This confession represents the biblical and theological convictions that guide our understanding of Scripture and shape our church life.
                            </p>
                            <div className="text-center">
                                <a href="/beliefs/confession" className="btn-secondary">
                                    Read the Confession
                                </a>
                            </div>
                        </div>

                        {/* Church Constitution */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-warm rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-brown mb-4 text-center">Church Constitution</h3>
                            </div>
                            <p className="text-brown leading-relaxed mb-6 font-body">
                                Our church constitution outlines the practical governance, membership requirements, and operational procedures that guide our life together as a local body of believers.
                            </p>
                            <div className="text-center">
                                <a href="/church-constitution.pdf" className="btn-secondary">
                                    Read the Constitution
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}