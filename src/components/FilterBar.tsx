import React from 'react';
import { Search, Filter } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="relative flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search items or characters..."
            className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
        </div>
        
        <div className="flex items-center space-x-4">
          <select className="bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>All Categories</option>
            <option>Characters</option>
            <option>Weapons</option>
            <option>Armor</option>
            <option>Accessories</option>
          </select>
          
          <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}