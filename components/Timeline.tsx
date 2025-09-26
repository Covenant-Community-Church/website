import React from 'react';
import { MessageCircle } from 'lucide-react';

interface TimelineProps {
    children: React.ReactNode;
}

interface TimelineItemProps {
    date: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container-max">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-navy/30 hidden md:block"></div>
                    <div className="space-y-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function TimelineItem({ date, icon, children }: TimelineItemProps) {
    const defaultIcon = <MessageCircle className="w-8 h-8 text-navy" />;

    return (
        <div className="relative flex items-start">
            <div className="icon-container flex-shrink-0 w-16 h-16 relative z-10 md:mr-8">
                {icon || defaultIcon}
            </div>
            <div className="card flex-grow p-6 ml-4 md:ml-0">
                <div className="flex items-center mb-2">
                    <span className="text-sm font-semibold text-navy bg-warm px-3 py-1 rounded-full font-body">
                        {date}
                    </span>
                </div>
                <div className="text-brown leading-relaxed font-body">
                    {children}
                </div>
            </div>
        </div>
    );
}