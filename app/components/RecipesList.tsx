import { Recipe } from '../@types/recipe';
import RecipeCard from './Recipe/RecipeCard';

export default function RecipesList({ recipes, query }: { recipes: Recipe[]; query?: string }) {
  return (
    <ul>
      {recipes.length === 0 && <p>No recipes to show</p>}
      {recipes.map((recipe: Recipe, index: number) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </ul>
  );
}
