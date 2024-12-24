import React from 'react';
import { Sword, Wallet, Bell, ChevronDown, Menu } from 'lucide-react';
import { NetworkSelector } from '../ui/NetworkSelector';

export default function Navbar() {
  return (
    <nav className="border-b border-white/[0.03] bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute inset-0 blur-sm bg-accent-purple/20 rounded-full"></div>
                <Sword className="relative w-8 h-8 text-accent-purple" />
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple text-transparent bg-clip-text">
                Kingdom Realms
              </span>
            </div>
            
            <div className="hidden md:flex ml-10 space-x-1">
              {['Market', 'Trade', 'Inventory', 'Analytics'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/[0.03] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <NetworkSelector />
            <button className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/[0.03]">
              <Bell className="w-5 h-5" />
            </button>
            <button className="bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 px-4 py-2 rounded-lg flex items-center space-x-2 transition-opacity">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Connect</span>
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}