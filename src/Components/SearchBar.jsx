import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search by ingredient... ( Eg : Chicken )"
            className="w-full pl-12 pr-32 py-3 text-base bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-all duration-200"
          />
          <button
            onClick={handleSubmit}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-4 py-3.5 rounded-md hover:bg-slate-800 transition-colors duration-200 text-sm font-medium"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;