'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //don't refresh
    setIsLoading(true);

    const recipe = { title, date }; // TODO user_email

    const response = await fetch('/api/recipes/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recipe),
    });

    if (response.ok) {
      alert('Success! You created a new recipe!');
      setTitle('');
      setDate('');
      router.push('/recipes');
    } else {
      alert('Something went wrong when creating a recipe');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Recipe Title</span>
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Reciple publishing Date</span>
        <input required type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Recipe</span>}
      </button>
    </form>
  );
}
