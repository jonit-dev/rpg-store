import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

export function Card({ children, className = '', glowEffect = false }: CardProps) {
  return (
    <div className={`
      bg-background-lighter
      border border-white/[0.03]
      rounded-xl
      backdrop-blur-sm
      ${glowEffect ? 'shadow-glow' : 'shadow-card'}
      ${className}
    `}>
      {children}
    </div>
  );
}