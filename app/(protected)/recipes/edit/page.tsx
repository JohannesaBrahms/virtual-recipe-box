'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecipeForm from '../create/_components/recipe-form';
import { Recipe } from '@/app/@types/recipe';

const EditRecipePage = () => {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  const searchParams = useSearchParams();
  const recipeId = searchParams.get('id');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`/api/recipes/${recipeId}`);
      const data: Recipe = await response.json();
      setRecipe(data);
    };
    if (recipeId) getRecipe();
  }, [recipeId]);

  return (
    <div>
      <h1>Edit Recipe info of:</h1>
      {recipe ? <RecipeForm recipe={recipe} /> : <p>loading...</p>}
      <form />
    </div>
  );
};

export default EditRecipePage;
