import React from 'react';
import { Search, Filter, TrendingUp, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

export default function FilterBar() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <input
              type="text"
              placeholder="Search items or characters..."
              className="w-full bg-gray-900/50 text-white rounded-lg pl-10 pr-4 py-2 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <select className="bg-gray-900/50 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none">
              <option>All Items</option>
              <option>Characters</option>
              <option>Weapons</option>
              <option>Armor</option>
            </select>
            
            <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              <Filter className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
        </div>
      </Card>

      <div className="flex gap-4 overflow-x-auto pb-2">
        <Card className="p-4 flex items-center gap-2 min-w-[200px]">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-400">Floor Price</p>
            <p className="text-lg font-medium">450 MATIC</p>
          </div>
        </Card>
        <Card className="p-4 flex items-center gap-2 min-w-[200px]">
          <Clock className="w-5 h-5 text-purple-500" />
          <div>
            <p className="text-sm text-gray-400">24h Volume</p>
            <p className="text-lg font-medium">12.5K MATIC</p>
          </div>
        </Card>
      </div>
    </div>
  );
}