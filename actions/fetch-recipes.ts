'use server';

import { db } from '@/lib/db';

export async function fetchRecipes(query?: string) {
  return await db.recipe.findMany({
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
