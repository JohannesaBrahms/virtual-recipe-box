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
  return (
    <div>
      <h1>Recipes List</h1>
      <ul>
        {recipes.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </ul>
    </div>
  );
};

export default RecipesPage;
