'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  const handleDelete = async (recipeId: string) => {
    // TODO
  };

  const handleEdit = async (recipeId: string) => {
    // TODO
  };

  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {recipes.length === 0 && <p>No recipes to show</p>}
        {recipes.map((recipe: Recipe, index: number) => (
          <div key={recipe.id}>
            <li>{recipe.title}</li>
            <li>{recipe.date}</li>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            <button onClick={() => handleEdit(recipe.id)}>Edit Recipe</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
