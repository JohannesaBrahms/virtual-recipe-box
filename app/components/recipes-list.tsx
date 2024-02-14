import { useRouter } from 'next/navigation';

export default function RecipesList({ recipes, query }: { recipes: Recipe[]; query?: String }) {
  const router = useRouter();

  const handleDelete = async (recipe: Recipe) => {
    // TODO
  };

  const handleEdit = async (recipe: Recipe) => {
    router.push(`/recipes/edit?id=${recipe.id}`);
  };

  return (
    <ul>
      {recipes.length === 0 && <p>No recipes to show</p>}
      {recipes.map((recipe: Recipe, index: number) => (
        <div key={recipe.id}>
          <li>{recipe.title}</li>
          <li>{recipe.date}</li>
          <button onClick={() => handleDelete(recipe)}>Delete</button>
          <button onClick={() => handleEdit(recipe)}>Edit Recipe</button>
        </div>
      ))}
    </ul>
  );
}
