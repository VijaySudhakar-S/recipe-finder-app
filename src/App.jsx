import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';
import RecipeDetail from './Components/RecipeDetail';
import Loader from './Components/Loader';
import ErrorMessage from './Components/ErrorMessage';
import Footer from './Components/Footer';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchRecipes = async (ingredient) => {
    try {
      setLoading(true);
      setError("");
      setSearchTerm(ingredient);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found for this ingredient.");
      }
    } catch (err) {
      setError("Failed to search recipes. Please try again.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const selectRecipe = async (recipe) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe.idMeal}`
      );
      const data = await res.json();
      if (data.meals) {
        setSelectedRecipe(data.meals[0]);
      } else {
        setError("Recipe details not found.");
      }
    } catch (err) {
      setError("Failed to load recipe details.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setSelectedRecipe(null);
    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <Header />
      
      <main className="flex-1">
        {!selectedRecipe ? (
          <>
            <SearchBar onSearch={searchRecipes} />
            
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            
            {!loading && !error && recipes.length === 0 && !searchTerm && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-slate-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Discover Recipes</h2>
                <p className="text-gray-600 max-w-md mx-auto">Enter an ingredient to find delicious recipes you can make</p>
              </div>
            )}
            
            {!loading && recipes.length > 0 && (
              <div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Results for "{searchTerm}"
                      </h2>
                      <p className="text-gray-600 mt-1">{recipes.length} recipes found</p>
                    </div>
                  </div>
                </div>
                <RecipeList recipes={recipes} onSelect={selectRecipe} />
              </div>
            )}
          </>
        ) : (
          <RecipeDetail recipe={selectedRecipe} onBack={goBack} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;