import { Grid } from '@mui/material';
import { Recipe } from '@/app/@types/recipe';
import RecipeCard from '@/components/recipe/recipe-card';
import { fetchRecipes } from '@/actions/fetch-recipes';

export default async function RecipesList({ query }: { query?: string }) {
  const recipes: Recipe[] = await fetchRecipes(query);

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
