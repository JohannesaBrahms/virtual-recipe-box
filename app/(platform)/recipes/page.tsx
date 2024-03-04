import { Button } from '@/components/button';
import SkeletonRecipeCard from '@/components/recipe/skeleton-recipe-card';
import RecipesList from '@/components/recipe/recipes-list';
import Search from '@/components/search';
import { Grid, Typography } from '@mui/material';
import { Suspense } from 'react';

const RecipesPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';

  return (
    <div>
      <Search placeholder="Search recipes..." />
      <Button href="/recipes/create" label="Create New Recipe" />
      <Typography variant="h3" alignItems={'center'}>
        Recipes
      </Typography>
      <Suspense
        fallback={
          <Grid container spacing={3}>
            {Array.from(new Array(6)).map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <SkeletonRecipeCard />
              </Grid>
            ))}
          </Grid>
        }>
        <RecipesList query={query} />
      </Suspense>
    </div>
  );
};

export default RecipesPage;
