import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
        {children}
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
          {subtitle}
        </p>
      )}
    </div>
  );
}
