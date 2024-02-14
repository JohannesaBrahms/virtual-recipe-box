'use client';

import RecipesList from '@/app/components/recipes-list';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch('/api/recipes');
      const data = await response.json();
      setRecipes(data);
    };
    getRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes List</h1>
      <RecipesList recipes={recipes} />
      <div>
        <button onClick={() => router.push('/recipes/create')}>Create New Recipe</button>
      </div>
    </div>
  );
};

export default RecipesPage;
