"use client"

import { motion } from "framer-motion";
import { BookOpen, Calendar, Cross, Users } from "lucide-react";

// Updated data structure for better clarity and scalability
const services = [
    {
        day: "Lord's Day",
        events: [
            { name: "Sunday School", time: "9:00 A.M.", icon: BookOpen },
            { name: "Sunday Service", time: "10:30 A.M.", icon: Cross },
            { name: "Fellowship Meal", time: "12:00 P.M.", icon: Users },
        ],
    },
    {
        day: "Wednesday",
        events: [
            { name: "Prayer Meeting", time: "6:00 P.M.", icon: Calendar }
        ],
    }
];

// Animation variants for the container and items
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

export function ServicesSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Church Services</h2>
                    <p className="text-lg text-muted-foreground">
                        We invite you to join us in worship and fellowship. Our services are designed
                        to celebrate God’s love, explore His Word, and inspire your spiritual journey.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.day}
                            variants={itemVariants}
                            className="bg-background rounded-2xl shadow-lg border border-border/50 overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">{service.day}</h3>
                            </div>
                            <div className="p-6 space-y-4">
                                {service.events.map((event) => {
                                    const Icon = event.icon;
                                    return (
                                        <div key={event.name} className="flex items-center gap-4">
                                            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground">{event.name}</p>
                                                <p className="text-sm text-muted-foreground">{event.time}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}