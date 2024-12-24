import React from 'react';
import { Wallet, Sword, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Sword className="w-8 h-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">CryptoRealm Market</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg flex items-center">
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </button>
            <button className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}