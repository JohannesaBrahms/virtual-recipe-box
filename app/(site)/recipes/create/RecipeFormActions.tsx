'use client';

import { createRecipe, updateRecipe } from '@/app/lib/actions';
import { useFormStatus } from 'react-dom';

export default function RecipeForm({ recipe }: { recipe?: Recipe }) {
  const { pending } = useFormStatus();

  return (
    <form action={recipe ? updateRecipe.bind(null, recipe.id) : createRecipe}>
      {/* Title */}
      <label aria-label="title" htmlFor="title">
        Recipe title
      </label>
      <input required name="title" placeholder="Broccolini pizza" defaultValue={recipe?.title} />
      {/* Description */}
      <label aria-label="description" htmlFor="description" aria-placeholder="Description...">
        Description
      </label>
      <input required name="description" defaultValue={recipe?.description} />
      {/* Difficulty */}
      <label aria-label="difficulty" htmlFor="difficulty">
        Difficulty
      </label>
      <select required name="difficulty" defaultValue={recipe?.difficulty}>
        <option value="beginner">beginner</option>
        <option value="intermediate">intermediate</option>
        <option value="pro">pro</option>
      </select>
      {/* Submit */}
      <button type="submit" aria-disabled={pending}>
        {recipe ? 'Edit' : 'Add'} Recipe
      </button>
      {pending && <span>Lifting weights...</span>}
      {/* <p aria-live="polite" role="status"></p> */}
    </form>
  );
}
