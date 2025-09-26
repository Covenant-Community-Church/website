import React from 'react';

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function SectionHeader({ title, children }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-heading font-bold text-brown mb-6">{title}</h2>
      {children && <p className="text-lg text-brown max-w-4xl mx-auto font-body leading-relaxed">{children}</p>}
    </div>
  );
}
