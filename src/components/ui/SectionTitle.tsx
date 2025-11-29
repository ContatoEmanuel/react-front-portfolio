import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
      {children}
    </h2>
  );
}
