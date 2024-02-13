import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * On its way to deprecation in favor of [server actions] in `@lib/actions.ts`
 * @param request
 * @returns NextResponse
 */
export async function POST(request: Request) {
  const { title, date } = await request.json(); // destructure body
  console.log(request.json());

  try {
    // transaction to find author (by `id` in future) and assign author id.
    await prisma.$transaction(async (tx) => {
      const author = await tx.account.findFirst();

      if (author == undefined) {
        throw new Error('Error finding author. Could not create recipe.');
      }

      const recipe = await tx.recipe.create({
        data: {
          title,
          description: 'dummy description',
          difficulty: 'pro',
          date: new Date().toISOString().split('T')[0],
          editDate: new Date().toISOString().split('T')[0],
          authorId: author.id,
        },
      });
      return NextResponse.json(recipe, { status: 201 });
    });
  } catch (error) {
    return NextResponse.json(null, {
      status: 500,
      statusText: 'Database Error: Failed to Create Recipe.',
    });
  }
}
