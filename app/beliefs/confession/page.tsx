'use client';

import { useState } from 'react';
import confessionData from '@/data/1689-confession.json';

export default function ConfessionPage() {
    const {title, chapters} = confessionData;
    const chapterKeys = Object.keys(chapters);
    const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

    const currentChapter = selectedChapter ? chapters[selectedChapter as keyof typeof chapters] : null;

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-warm to-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-brown mb-6">
                            {title}
                        </h1>
                        <p className="text-lg text-brown max-w-2xl mx-auto font-body">
                            The complete text of the Baptist Confession of Faith adopted in 1689,
                            which serves as a foundational document for our church&#39;s beliefs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Chapter Selection or Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {!selectedChapter ? (
                        /* Chapter Grid */
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-2xl font-heading font-bold text-brown mb-4">
                                    Select a Chapter
                                </h2>
                                <p className="text-brown font-body">
                                    Choose a chapter to read from the confession
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {chapterKeys.map((chapterNum) => {
                                    const chapter = chapters[chapterNum as keyof typeof chapters];
                                    return (
                                        <button
                                            key={chapterNum}
                                            onClick={() => setSelectedChapter(chapterNum)}
                                            className="bg-white border border-warm rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-navy transition-all duration-200 text-left group h-full"
                                        >
                                            <div className="flex flex-col h-full">
                                                 <h3 className="text-lg font-heading font-bold text-brown mb-3 group-hover:text-navy transition-colors flex-grow">
                                                    Chapter {chapterNum}
                                                </h3>
                                                <h3 className="text-lg font-heading font-bold text-brown mb-3 group-hover:text-navy transition-colors flex-grow">
                                                    {chapter.title}
                                                </h3>

                                                <p className="text-brown font-body text-sm">
                                                    {Object.keys(chapter.paragraphs).length} paragraph{Object.keys(chapter.paragraphs).length !== 1 ? 's' : ''}
                                                </p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        /* Selected Chapter Content */
                        <div>
                            {/* Back Button */}
                            <div className="mb-8">
                                <button
                                    onClick={() => setSelectedChapter(null)}
                                    className="text-navy hover:text-brown font-body font-medium transition-colors"
                                >
                                    ← Back to Chapter List
                                </button>
                            </div>

                            {/* Chapter Content */}
                            <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                                <div className="text-center mb-12">
                                    <span
                                        className="text-sm font-semibold text-navy bg-warm px-3 py-1 rounded-full font-body">
                                        Chapter {selectedChapter}
                                    </span>
                                    <h2 className="text-3xl font-heading font-bold text-brown mt-4 mb-4">
                                        {currentChapter?.title}
                                    </h2>
                                </div>

                                <div className="space-y-6">
                                    {currentChapter && Object.entries(currentChapter.paragraphs).map(([paragraphNum, text]) => (
                                        <div key={paragraphNum} className="border-l-4 border-navy pl-6">
                                            {paragraphNum && (
                                                <h3 className="text-lg font-heading font-bold text-navy mb-3">
                                                    §{paragraphNum}
                                                </h3>
                                            )}
                                            <p className="text-brown font-body leading-relaxed">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* About Section */}
            {!selectedChapter && (
                <section className="py-16 bg-warm">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white border border-warm rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-heading font-bold text-brown mb-4">
                                About This Confession
                            </h3>
                            <p className="text-brown font-body leading-relaxed">
                                The Baptist Confession of Faith of 1689, also known as the Second London
                                Baptist Confession, is a Reformed Baptist confession of faith. It was
                                written by Particular Baptists, who held to a Calvinistic understanding
                                of salvation, in contrast to the General Baptists who held to an
                                Arminian understanding of salvation.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}