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
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="flex-shrink-0 w-16 h-16 bg-warm rounded-full flex items-center justify-center relative z-10 md:mr-8">
                {icon || defaultIcon}
            </div>
            <div className="flex-grow bg-white border border-warm rounded-2xl p-6 shadow-sm ml-4 md:ml-0">
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