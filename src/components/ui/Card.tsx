import type { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glass?: boolean;
}

export default function Card({ glass = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`
        rounded-card border border-school-border shadow-card
        ${glass ? 'glass' : 'bg-school-surface'}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
