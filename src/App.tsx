import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import { SwapCard } from './components/swap/SwapCard';
import { StakeCard } from './components/stake/StakeCard';
import { MarketplaceTabs } from './components/market/MarketplaceTabs';
import { CharacterMarket } from './components/market/CharacterMarket';
import { ItemMarket } from './components/market/ItemMarket';

export default function App() {
  const [activeTab, setActiveTab] = useState<'characters' | 'items'>('characters');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <SwapCard />
          <StakeCard />
        </div>
        
        <div className="space-y-6">
          <MarketplaceTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {activeTab === 'characters' ? <CharacterMarket /> : <ItemMarket />}
        </div>
      </main>
    </div>
  );
}