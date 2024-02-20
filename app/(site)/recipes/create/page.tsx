import RecipeForm from './RecipeForm';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

const CreateRecipe = () => {
  return (
    <div>
      <h1>Create New Recipe</h1>
      <RecipeForm />
      <Link href="/recipes" component={NextLink}>
        Go To Recipes
      </Link>
    </div>
  );
};

export default CreateRecipe;
