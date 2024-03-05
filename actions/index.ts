'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { prisma } from '@/lib/db';
import { CreateRecipe, UpdateRecipe } from '@/schemas';

export async function createRecipe(formData: FormData) {
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
}

export async function updateRecipe(id: string, formData: FormData) {
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
}

export async function fetchRecipes(query?: string) {
  // await setTimeout(2000) // uncomment for skeleton testing
  return await prisma.recipe.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
}

export async function login(formData: FormData) {
  // return await prisma.account.findUnique()
}
