import React from 'react';
import { MarketGrid } from './MarketGrid';
import FilterBar from '../layout/FilterBar';

const sampleItems = [
  {
    id: '1',
    name: 'Thunderfury',
    type: 'weapon',
    rarity: 'legendary',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1589418669665-36a9a2aa5bc0?auto=format&fit=crop&q=80',
    owner: '0x789...',
    description: 'A legendary sword imbued with the power of thunder.'
  },
  {
    id: '2',
    name: 'Dragon Scale Armor',
    type: 'armor',
    rarity: 'epic',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1594642461504-f803277410e6?auto=format&fit=crop&q=80',
    owner: '0xabc...',
    description: 'Armor forged from the scales of an ancient dragon.'
  }
] as const;

export function ItemMarket() {
  return (
    <div className="space-y-6">
      <FilterBar />
      <MarketGrid items={sampleItems} />
    </div>
  );
}