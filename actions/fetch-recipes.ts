'use server';

import { auth } from '@/auth';
import { db } from '@/lib/db';

export async function fetchRecipes(query?: string) {
  const session = await auth();
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
