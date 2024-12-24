import React from 'react';
import { Timer, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';

export function StakeCard() {
  return (
    <Card className="w-full max-w-md" glowEffect>
      <div className="p-4 border-b border-white/[0.03]">
        <h2 className="text-lg font-semibold">Stake KRT</h2>
      </div>

      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-background rounded-lg border border-white/[0.03]">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Timer className="w-4 h-4" />
              <span className="text-sm">Lock Period</span>
            </div>
            <p className="text-xl font-medium">30 Days</p>
          </div>

          <div className="p-4 bg-background rounded-lg border border-white/[0.03]">
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">APR</span>
            </div>
            <p className="text-xl font-medium text-accent-purple">12.5%</p>
          </div>
        </div>

        <div className="p-4 bg-background rounded-lg border border-white/[0.03]">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Stake Amount</span>
            <span>Balance: 100.00 KRT</span>
          </div>
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-transparent text-xl font-medium focus:outline-none"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-opacity">
          Stake KRT
        </button>

        <div className="text-sm text-gray-400">
          <div className="flex justify-between">
            <span>Total Staked</span>
            <span>0.00 KRT</span>
          </div>
          <div className="flex justify-between">
            <span>Rewards Earned</span>
            <span>0.00 KRT</span>
          </div>
        </div>
      </div>
    </Card>
  );
}