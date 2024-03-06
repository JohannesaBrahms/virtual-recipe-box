'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/db';
import { CreateRecipe } from '@/schemas';

export const createRecipe = async (formData: FormData) => {
  const { title, description, difficulty } = CreateRecipe.parse({
    title: formData.get('title'),
    description: formData.get('description'),
    difficulty: formData.get('difficulty'),
  });

  try {
    await prisma.$transaction(async (tx) => {
      const author = await tx.account.findFirst();

      if (author == undefined) {
        throw new Error('Error finding author. Could not create recipe.');
      }

      await tx.recipe.create({
        data: {
          authorId: author.id,
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
