import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white dark:bg-slate-900 dark:border dark:border-slate-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
