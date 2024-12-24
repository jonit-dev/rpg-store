export interface Character {
  id: string;
  name: string;
  level: number;
  class: string;
  price: number;
  image: string;
  owner: string;
  stats: {
    strength: number;
    agility: number;
    intelligence: number;
  };
}

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'accessory' | 'consumable';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price: number;
  image: string;
  owner: string;
  description: string;
}