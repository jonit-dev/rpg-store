import React from 'react';
import { Sword, Shield, Sparkles } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Stat } from '../ui/Stats';
import { Character, Item } from '../../types';

interface MarketCardProps {
  item: Character | Item;
}

export function MarketCard({ item }: MarketCardProps) {
  const isCharacter = 'stats' in item;

  return (
    <Card className="group overflow-hidden hover:border-accent-purple/30 transition-all duration-300">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-lighter to-transparent" />
        <div className="absolute top-2 right-2 flex gap-2">
          {isCharacter ? (
            <Badge variant="legendary">Lvl {item.level}</Badge>
          ) : (
            <Badge variant={item.rarity}>{item.rarity}</Badge>
          )}
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{item.name}</h3>
            <p className="text-sm text-gray-400">{isCharacter ? item.class : item.type}</p>
          </div>
          <div className="flex items-center text-accent-purple font-medium">
            <img 
              src="https://cryptologos.cc/logos/polygon-matic-logo.png" 
              alt="MATIC" 
              className="w-4 h-4 mr-1"
            />
            <span>{item.price}</span>
          </div>
        </div>

        {isCharacter ? (
          <div className="space-y-2">
            <Stat label="Strength" value={item.stats.strength} />
            <Stat label="Agility" value={item.stats.agility} />
            <Stat label="Intelligence" value={item.stats.intelligence} />
          </div>
        ) : (
          <p className="text-sm text-gray-400">{item.description}</p>
        )}

        <button className="w-full bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-opacity">
          <Sparkles className="w-4 h-4" />
          Buy Now
        </button>
      </div>
    </Card>
  );
}