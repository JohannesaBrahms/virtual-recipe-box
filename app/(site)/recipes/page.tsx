import RecipesList from '@/app/components/RecipesList';
import Search from '@/app/components/Search';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { fetchRecipes } from '@/app/lib/actions';

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
      <h1>Recipes List</h1>
      <RecipesList recipes={recipes} />
      <Link href="/recipes/create" component={NextLink}>
        Create New Recipe
      </Link>
    </div>
  );
}
