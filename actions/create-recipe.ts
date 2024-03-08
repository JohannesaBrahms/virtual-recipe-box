'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { CreateRecipeSchema } from '@/lib/types';

export const createRecipe = async (formData: FormData) => {
  const { title, description, difficulty } = CreateRecipeSchema.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    difficulty: formData.get('difficulty'),
  });

  try {
    await db.$transaction(async (tx) => {
      const user = await tx.user.findFirst();

      if (user == undefined) {
        throw new Error('Error finding author. Could not create recipe.');
      }

      await tx.recipe.create({
        data: {
          userId: user.id,
          title,
          description,
          difficulty,
          date: new Date().toISOString(),
          editDate: new Date().toISOString(),
        },
      });
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Create Recipe.' };
  }

  revalidatePath('/recipes');
  redirect('/recipes');
};
