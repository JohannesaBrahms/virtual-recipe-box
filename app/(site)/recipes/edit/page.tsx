'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const EditPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  const router = useRouter();

  const searchParams = useSearchParams();
  const recipeId = searchParams.get('id');

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`/api/recipes/${recipeId}`);
      console.log(response);
      const data: Recipe = await response.json();
      setRecipe(data);
    };
    if (recipeId) getRecipe();
  }, [recipeId]);

  return (
    <div>
      <h1>Edit Recipe info of:</h1>
      {recipe ? (
        <>
          <p>{recipe.title}</p>
          <p>{recipe.date}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
      {/* TODO Form */}
      <form />
    </div>
  );
};

export default EditPage;
