import React from 'react';

export function SwapSettings() {
  return (
    <div className="mt-4 p-3 bg-background rounded-lg space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">Slippage tolerance</span>
        <div className="flex gap-2">
          {['0.5%', '1%', '2%'].map((value) => (
            <button
              key={value}
              className="px-2 py-1 text-sm rounded-lg bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}