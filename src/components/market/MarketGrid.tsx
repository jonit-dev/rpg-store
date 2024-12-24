import React from 'react';
import { MarketCard } from './MarketCard';
import { Character, Item } from '../../types';

interface MarketGridProps {
  items: (Character | Item)[];
}

export default function MarketGrid({ items }: MarketGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MarketCard key={item.id} item={item} />
      ))}
    </div>
  );
}