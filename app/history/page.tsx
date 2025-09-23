import PageHeader from "@/components/PageHeader";
import { Timeline, TimelineItem } from "@/components/Timeline";
import { MessageCircle, Users, CheckCircle, PauseCircle, User, UserCheck, Building, Sunrise, Star } from 'lucide-react';

export default function History() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Our History"
                description="The story of God's faithfulness in bringing together two congregations to form Covenant Community Church"
            />

            {/* Timeline Section */}
            <Timeline>
                <TimelineItem
                    date="June 2022"
                    icon={<MessageCircle className="w-8 h-8 text-navy" />}
                >
                    Rome Baptist Church (Chillicothe, IL) and Bethany Community Church (Washington, IL) began praying together about a potential partnership for gospel ministry in Central IL
                </TimelineItem>

                <TimelineItem
                    date="August 2022"
                    icon={<Users className="w-8 h-8 text-navy" />}
                >
                    The two congregations began intentionally developing relationships as they pursued the likelihood of partnering together.
                </TimelineItem>

                <TimelineItem
                    date="December 2022"
                    icon={<CheckCircle className="w-8 h-8 text-navy" />}
                >
                    It became clear that the Lord was leading both congregations to link arms together in formal partnership as they pursued the vision to re-plant RBC.
                </TimelineItem>

                <TimelineItem
                    date="January 2023"
                    icon={<PauseCircle className="w-8 h-8 text-navy" />}
                >
                    RBC Suspended their ministry and their congregation began worshiping at BCC for a season as plans began to take shape.
                </TimelineItem>

                <TimelineItem
                    date="February 2023"
                    icon={<User className="w-8 h-8 text-navy" />}
                >
                    The process to develop elders and deacons began and Jordan Embree was identified as a pastoral candidate for this re-plant.
                </TimelineItem>

                <TimelineItem
                    date="April 2023"
                    icon={<UserCheck className="w-8 h-8 text-navy" />}
                >
                    At a family meeting, Jordan Embree was affirmed by the congregation as the church plant pastor. Jordan was brought on staff at BCC as a pastor / elder and served there during the replanting process, developing a leadership team for the new work.
                </TimelineItem>

                <TimelineItem
                    date="June 2023"
                    icon={<Building className="w-8 h-8 text-navy" />}
                >
                    The two congregations began small renovations on the RBC property.
                </TimelineItem>

                <TimelineItem
                    date="August 2023"
                    icon={<Users className="w-8 h-8 text-navy" />}
                >
                    A group of 60 individuals and families from BCC committed themselves to joining the existing body at RBC. The leadership team was also identified.
                </TimelineItem>

                <TimelineItem
                    date="November 12, 2023"
                    icon={<Sunrise className="w-8 h-8 text-navy" />}
                >
                    Covenant Community Church launched and had its first Lord&#39;s Day gathering.
                </TimelineItem>

                <TimelineItem
                    date="July 6, 2025"
                    icon={<Star className="w-8 h-8 text-navy" />}
                >
                    The Lord faithfully brought CCC to the point of autonomy from BCC. With financial sustainability, a plurality of elders, a church constitution, a season of ministry health, and the blessing of BCC, CCC was constituted as an independent church.
                </TimelineItem>
            </Timeline>
        </div>
    );
}