import React from 'react';
import { Users, Sword } from 'lucide-react';

interface MarketplaceTabsProps {
  activeTab: 'characters' | 'items';
  onTabChange: (tab: 'characters' | 'items') => void;
}

export function MarketplaceTabs({ activeTab, onTabChange }: MarketplaceTabsProps) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onTabChange('characters')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'characters'
            ? 'bg-accent-purple/20 text-accent-purple'
            : 'hover:bg-white/[0.03] text-gray-400 hover:text-white'
        }`}
      >
        <Users className="w-4 h-4" />
        <span>Characters</span>
      </button>
      <button
        onClick={() => onTabChange('items')}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          activeTab === 'items'
            ? 'bg-accent-purple/20 text-accent-purple'
            : 'hover:bg-white/[0.03] text-gray-400 hover:text-white'
        }`}
      >
        <Sword className="w-4 h-4" />
        <span>Items</span>
      </button>
    </div>
  );
}