
'use client';

import React, { useState } from 'react';
import PageHeader from "@/components/PageHeader";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <PageHeader
                title="Contact Us"
                description="We&#39;d love to hear from you. Whether you have questions about our church, want to visit, or need prayer, don&#39;t hesitate to reach out."
            />

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-brown mb-8">Get in Touch</h2>

                            {/* Email */}
                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-warm rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-heading font-semibold text-brown mb-2">Email</h3>
                                        <a
                                            href="mailto:office@covenantcommunity.org"
                                            className="text-navy hover:text-brown text-lg font-medium underline font-body"
                                        >
                                            office@covenantcommunity.org
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-warm rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-heading font-semibold text-brown mb-2">Address</h3>
                                        <div className="text-brown font-body">
                                            <p className="text-lg">5104 E Stevenson Ave.</p>
                                            <p className="text-lg">Chillicothe, IL 61523</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service Times Quick Reference */}
                            <div className="bg-warm rounded-lg p-6 mb-8">
                                <h3 className="text-lg font-heading font-semibold text-brown mb-4 flex items-center">
                                    <svg className="w-5 h-5 text-navy mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Service Times
                                </h3>
                                <div className="space-y-2 text-brown font-body">
                                    <div className="flex justify-between">
                                        <span className="font-medium">Sunday School:</span>
                                        <span>9:00-10:00 AM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Worship Service:</span>
                                        <span>10:30 AM-12:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium">Evening Service:</span>
                                        <span>6:00-7:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-heading font-semibold text-brown mb-4">Quick Links</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <a
                                        href="/meeting-times"
                                        className="text-navy hover:text-brown underline font-body"
                                    >
                                        Service Times
                                    </a>
                                    <a
                                        href="/beliefs"
                                        className="text-navy hover:text-brown underline font-body"
                                    >
                                        Our Beliefs
                                    </a>
                                    <a
                                        href="/care-groups"
                                        className="text-navy hover:text-brown underline font-body"
                                    >
                                        Care Groups
                                    </a>
                                    <a
                                        href="/faq"
                                        className="text-navy hover:text-brown underline font-body"
                                    >
                                        FAQs
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-brown mb-8">Send us a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-heading font-medium text-brown mb-2">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-warm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy font-body"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-heading font-medium text-brown mb-2">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-warm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy font-body"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-heading font-medium text-brown mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-warm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy font-body"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-heading font-medium text-brown mb-2">
                                        Subject <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-warm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy font-body"
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-heading font-medium text-brown mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-warm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy font-body"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="btn-primary w-full flex items-center justify-center"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Send Message
                                    </button>
                                </div>
                            </form>

                            {/* Contact Note */}
                            <div className="mt-6 p-4 bg-warm rounded-lg">
                                <p className="text-sm text-brown font-body">
                                    <strong>Note:</strong> We typically respond to messages within 24-48 hours.
                                    For urgent matters, please email us directly at{' '}
                                    <a
                                        href="mailto:office@covenantcommunity.org"
                                        className="text-navy hover:text-brown underline"
                                    >
                                        office@covenantcommunity.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}