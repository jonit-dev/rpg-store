import React from 'react';
import { ChevronDown } from 'lucide-react';

export function NetworkSelector() {
  return (
    <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/[0.03] transition-colors">
      <img 
        src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
        alt="MATIC" 
        className="w-5 h-5"
      />
      <span className="text-sm font-medium">Polygon</span>
      <ChevronDown className="w-4 h-4" />
    </button>
  );
}