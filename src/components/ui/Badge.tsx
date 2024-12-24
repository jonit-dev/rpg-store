import React from 'react';

const variants = {
  legendary: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  epic: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
  rare: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
  common: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
};

interface BadgeProps {
  variant: keyof typeof variants;
  children: React.ReactNode;
}

export function Badge({ variant, children }: BadgeProps) {
  return (
    <span className={`${variants[variant]} text-xs font-medium px-2.5 py-0.5 rounded-full border backdrop-blur-sm`}>
      {children}
    </span>
  );
}