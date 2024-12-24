import React from 'react';

interface StatProps {
  label: string;
  value: number;
  max?: number;
}

export function Stat({ label, value, max = 100 }: StatProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{label}</span>
        <span className="text-gray-300">{value}</span>
      </div>
      <div className="h-1.5 bg-background rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}