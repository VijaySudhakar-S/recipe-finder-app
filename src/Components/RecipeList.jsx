import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={recipe.idMeal}
            className="opacity-0 animate-fade-in"
            style={{ 
              animationDelay: `${index * 0.05}s`, 
              animationFillMode: 'forwards' 
            }}
          >
            <RecipeCard recipe={recipe} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;