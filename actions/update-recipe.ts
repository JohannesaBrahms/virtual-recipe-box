'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/db';
import { UpdateRecipe } from '@/schemas';

export const updateRecipe = async (id: string, formData: FormData) => {
  const { title, description, difficulty } = UpdateRecipe.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    difficulty: formData.get('difficulty'),
  });

  try {
    // transaction to find author (by `id` in future) and assign recipe and author id.
    await prisma.$transaction(async (tx) => {
      const author = await tx.account.findFirst();

      if (author == undefined) {
        throw new Error('Could not update recipe.');
      }

      await tx.recipe.update({
        where: {
          id: id,
        },
        data: {
          authorId: author.id,
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
