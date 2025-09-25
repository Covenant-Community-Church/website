import React from 'react';

interface PageHeaderProps {
    title: string;
    children?: React.ReactNode;
}

export default function PageHeader({ title, children }: PageHeaderProps) {
    return (
        <section className="relative bg-warm border-b border-warm">
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAtNDAgMCAwIC00MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjZGM0VBIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="lg:flex-shrink-0">
                            <h1 className="text-2xl md:text-3xl font-heading font-bold text-brown tracking-tight">
                                {title}
                            </h1>
                        </div>

                        {children && (
                            <div className="mt-4 lg:mt-0 lg:ml-4">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}