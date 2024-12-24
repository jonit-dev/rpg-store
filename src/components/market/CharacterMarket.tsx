import React from 'react';
import { MarketGrid } from './MarketGrid';
import FilterBar from '../layout/FilterBar';

const sampleCharacters = [
  {
    id: '1',
    name: 'Shadow Warrior',
    level: 45,
    class: 'Warrior',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80',
    owner: '0x123...',
    stats: {
      strength: 75,
      agility: 60,
      intelligence: 40
    }
  },
  {
    id: '2',
    name: 'Mystic Mage',
    level: 38,
    class: 'Mage',
    price: 950,
    image: 'https://images.unsplash.com/photo-1514068574489-503a8eb91592?auto=format&fit=crop&q=80',
    owner: '0x456...',
    stats: {
      strength: 30,
      agility: 45,
      intelligence: 85
    }
  }
];

export function CharacterMarket() {
  return (
    <div className="space-y-6">
      <FilterBar />
      <MarketGrid items={sampleCharacters} />
    </div>
  );
}