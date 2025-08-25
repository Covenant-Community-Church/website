interface PageHeaderProps {
    title: string;
    scripture?: {
        text: string;
        reference: string;
    };
    description?: string;
}

export default function PageHeader({ title, scripture, description }: PageHeaderProps) {
    return (
        <section className="relative bg-gradient-to-b from-warm via-white to-white py-20">
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDQwIDAgbCAtNDAgMCAwIC00MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRjZGM0VBIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold text-brown mb-6 tracking-tight">
                        {title}
                    </h1>
                    <div className="w-24 h-1 bg-navy mx-auto mb-8"></div>

                    {scripture ? (
                        <>
                            <p className="text-xl text-brown max-w-3xl mx-auto font-body leading-relaxed">
                                &#34;{scripture.text}&#34;
                            </p>
                            <cite className="block text-navy font-medium mt-4 font-body">{scripture.reference}</cite>
                        </>
                    ) : description ? (
                        <p className="text-xl text-brown max-w-3xl mx-auto font-body leading-relaxed">
                            {description}
                        </p>
                    ) : null}
                </div>
            </div>
        </section>
    )
}