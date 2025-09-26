
import PageHeader from "@/components/PageHeader";

export default function CareGroups() {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="Care Groups"
            />

            {/* What We Do */}
            <section className="py-16 bg-white">
                <div className="container-max">
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
                        <div className="card p-6 text-center">
                            <p className="text-brown font-body">Bi-weekly meetings with flexible scheduling</p>
                        </div>
                        <div className="card p-6 text-center">
                            <h3 className="text-xl font-heading font-bold text-brown mb-4">Where</h3>
                            <p className="text-brown font-body">Homes and church building</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="py-16 section-accent">
                <div className="container-max text-center">
                    <h2 className="text-2xl font-heading font-bold text-brown mb-6">
                        Join a Care Group
                    </h2>
                    <p className="text-brown mb-8 font-body">
                        Interested in joining or learning more about our Care Groups?
                    </p>
                    <a
                        href="mailto:caregroups@covenantcommunity.org"
                        className="btn-primary"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}