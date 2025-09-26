interface MeetingCardProps {
    icon: React.ReactNode;
    title: string;
    day: string;
    time: string;
    description: string | React.ReactNode;
}

export default function MeetingCard({ icon, title, day, time, description }: MeetingCardProps) {
    return (
        <div className="card p-6">
            <div className="text-center mb-6">
                <div className="icon-container w-12 h-12 mx-auto mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brown mb-2">{title}</h3>
                <p className="text-2xl font-bold text-navy font-body">{day} @ {time}</p>
            </div>
            <div className="text-brown text-sm leading-relaxed font-body">
                {description}
            </div>
        </div>
    );
}