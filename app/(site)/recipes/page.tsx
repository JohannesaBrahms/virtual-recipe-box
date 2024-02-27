import { Button } from '@/app/components/Button';
import RecipesList from '@/app/components/RecipesList';
import Search from '@/app/components/Search';
import { fetchRecipes } from '@/app/lib/actions';
import { Typography } from '@mui/material';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const recipes = await fetchRecipes(query);

  return (
    <div>
      <Search placeholder="Search recipes..." />
      <RecipesList recipes={recipes} />
      <Button href="/recipes/create" label="Create New Recipe" />
      <Typography variant="h3" alignItems={'center'}>
        Recipes
      </Typography>
    </div>
  );
}
