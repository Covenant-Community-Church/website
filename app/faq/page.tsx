import PageHeader from "@/components/PageHeader";
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="FAQs"
            />

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container-max">
                    <div className="space-y-8">

                        <div className="card p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="icon-container w-8 h-8">
                                        <HelpCircle className="w-4 h-4 text-navy" />
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

                        <div className="card p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="icon-container w-8 h-8">
                                        <HelpCircle className="w-4 h-4 text-navy" />
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
                        <div className="card p-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="icon-container w-8 h-8">
                                        <HelpCircle className="w-4 h-4 text-navy" />
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
                                        <div className="section-accent border-l-4 border-navy p-4 rounded-r-2xl">
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