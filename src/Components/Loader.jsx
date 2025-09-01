import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <Loader2 className="w-8 h-8 text-slate-600 animate-spin" />
      </div>
      <p className="mt-3 text-slate-600">Loading recipes...</p>
    </div>
  );
};

export default Loader;