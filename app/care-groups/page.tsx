
import PageHeader from "@/components/PageHeader";

export default function CareGroups() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Care Groups"
            />

            {/* What We Do */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-brown mb-6">
                            Bible Study • Prayer • Fellowship
                        </h2>
                        <p className="text-lg text-brown font-body">
                            Our Care Groups meet bi-weekly for deeper community and spiritual growth
                        </p>
                    </div>

                    <div className="bg-warm rounded-2xl p-8 mb-12 text-center">
                        <blockquote className="text-xl italic text-brown mb-4 font-body">
                            &#34;Love one another with brotherly affection. Outdo one another in showing honor.&#34;
                        </blockquote>
                        <cite className="text-brown font-body">Romans 12:10</cite>
                    </div>

                    {/* Meeting Info */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm text-center">
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">When</h3>
                            <p className="text-brown font-body">Bi-weekly meetings with flexible scheduling</p>
                        </div>
                        <div className="bg-white border border-warm rounded-2xl p-6 shadow-sm text-center">
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Where</h3>
                            <p className="text-brown font-body">Homes and church building</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 bg-warm">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-heading font-bold text-brown mb-6">
                        Join a Care Group
                    </h2>
                    <p className="text-brown mb-8 font-body">
                        Interested in joining or learning more about our Care Groups?
                    </p>
                    <a
                        href="mailto:caregroups@covenantcommunity.org"
                        className="inline-flex items-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-medium rounded-2xl transition-colors font-body"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}