import React from 'react';
import { Character, Item } from '../types';

interface MarketGridProps {
  items: (Character | Item)[];
}

export default function MarketGrid({ items }: MarketGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {items.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
            <p className="text-purple-400 mt-1">{item.price} MATIC</p>
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}