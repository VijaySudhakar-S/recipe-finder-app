import React from 'react';
import { Clock } from 'lucide-react';

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(recipe)}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-gray-300"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 text-lg leading-tight line-clamp-2 mb-2">
          {recipe.strMeal}
        </h3>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-1.5" />
          <span>Ready to cook</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;