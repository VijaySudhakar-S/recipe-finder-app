import React from 'react';
import { ChefHat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-slate-900 rounded-lg">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">RecipeHub</h1>
              <p className="text-sm text-gray-600 hidden sm:block">Professional recipe discovery</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;