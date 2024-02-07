'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const router = useRouter();

  const handlePostCreation = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!title || !date) return alert('Please fil in all fields');

    event.preventDefault(); //don't refresh

    const response = await fetch('/api/create-recipe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, date }),
    });

    if (response.ok) {
      alert('Success! You created a new recipe!');
      setTitle('');
      setDate('');
    } else {
      alert('Something went wrong :(');
    }
  };

  return (
    <div>
      <h1>Create New Recipe</h1>
      <form onSubmit={handlePostCreation}>
        <label>Recipe Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Reciple publishing Date</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateRecipe;
