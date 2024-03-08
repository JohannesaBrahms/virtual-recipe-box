'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { UpdateRecipeSchema } from '@/lib/types';

export const updateRecipe = async (id: string, formData: FormData) => {
  const { title, description, difficulty } = UpdateRecipeSchema.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    difficulty: formData.get('difficulty'),
  });

  try {
    // transaction to find author (by `id` in future) and assign recipe and author id.
    await db.$transaction(async (tx) => {
      const user = await tx.user.findFirst();

      if (user == undefined) {
        throw new Error('Could not update recipe.');
      }

      await tx.recipe.update({
        where: {
          id: id,
        },
        data: {
          userId: user.id,
          title,
          description,
          difficulty,
          editDate: new Date().toISOString(),
        },
      });
    });
  } catch (error) {
    return { message: 'Database Error: Failed to Update Recipe.' };
  }

  revalidatePath('/recipes');
  redirect('/recipes');
};
