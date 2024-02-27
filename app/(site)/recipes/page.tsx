import { Button } from '@/app/components/Button';
import RecipesList from '@/app/components/RecipesList';
import Search from '@/app/components/Search';
import { Typography } from '@mui/material';
import { Suspense } from 'react';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div>
      <Search placeholder="Search recipes..." />
      <Button href="/recipes/create" label="Create New Recipe" />
      <Typography variant="h3" alignItems={'center'}>
        <Suspense fallback="Loading recipes...">
          <RecipesList query={query} />
        </Suspense>
        Recipes
      </Typography>
    </div>
  );
}
