import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Token {
  symbol: string;
  name: string;
  icon: string;
  balance: string;
}

interface TokenInputProps {
  token: Token;
}

export function TokenInput({ token }: TokenInputProps) {
  return (
    <div className="p-4 bg-background rounded-lg border border-white/[0.03]">
      <div className="flex justify-between text-sm text-gray-400 mb-1">
        <span>Amount</span>
        <span>Balance: {token.balance}</span>
      </div>
      
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/[0.03] transition-colors">
          <span className="text-2xl">{token.icon}</span>
          <span className="font-medium">{token.symbol}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        
        <input
          type="text"
          placeholder="0.0"
          className="flex-1 bg-transparent text-right text-xl font-medium focus:outline-none"
        />
      </div>
    </div>
  );
}