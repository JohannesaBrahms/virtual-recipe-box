import { Grid } from '@mui/material';
import { Recipe } from '../@types/recipe';
import RecipeCard from './Recipe/RecipeCard';

export default function RecipesList({ recipes, query }: { recipes: Recipe[]; query?: string }) {
  return (
    <Grid container spacing={3}>
      {recipes.length === 0 && <p>No recipes to show</p>}
      {recipes.map((recipe: Recipe, index: number) => (
        <Grid key={recipe.id} item xs={12} sm={6} md={4}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
}
