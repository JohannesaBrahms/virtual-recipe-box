'use server';

import { prisma } from '@/lib/db';

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
