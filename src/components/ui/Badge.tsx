import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-block px-3 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full ${className}`}>
      {children}
    </span>
  );
}
