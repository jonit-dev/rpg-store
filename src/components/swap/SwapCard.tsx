import React, { useState } from 'react';
import { ArrowDownUp, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { TokenInput } from './TokenInput';
import { SwapSettings } from './SwapSettings';

export function SwapCard() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <Card className="w-full max-w-md" glowEffect>
      <div className="p-4 border-b border-white/[0.03]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Swap</h2>
          <button 
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 hover:bg-white/[0.03] rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        {showSettings && <SwapSettings />}
      </div>

      <div className="p-4 space-y-4">
        <TokenInput
          token={{
            symbol: 'GOLD',
            name: 'Game Gold',
            icon: '🪙',
            balance: '1,234.56'
          }}
        />

        <div className="flex justify-center -my-2 relative z-10">
          <button className="bg-background-lighter p-2 rounded-lg border border-white/[0.03] hover:border-accent-purple/30 transition-colors">
            <ArrowDownUp className="w-4 h-4" />
          </button>
        </div>

        <TokenInput
          token={{
            symbol: 'KRT',
            name: 'Kingdom Realm Token',
            icon: '⚔️',
            balance: '100.00'
          }}
        />

        <button className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-opacity">
          Swap Tokens
        </button>

        <div className="text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Rate</span>
            <span>1 GOLD = 0.05 KRT</span>
          </div>
          <div className="flex justify-between">
            <span>Slippage</span>
            <span>0.5%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}