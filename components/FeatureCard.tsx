import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function FeatureCard({ icon, title, children }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="icon-container w-16 h-16 mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl mb-4">{title}</h3>
      <div className="leading-relaxed">
        {children}
      </div>
    </div>
  );
}
