import CreateForm from './CreateForm';
import Link from 'next/link';

const CreateRecipe = () => {
  return (
    <div>
      <h1>Create New Recipe</h1>
      <CreateForm />
      <Link href="/recipes">Go To Recipes</Link>
    </div>
  );
};

export default CreateRecipe;
