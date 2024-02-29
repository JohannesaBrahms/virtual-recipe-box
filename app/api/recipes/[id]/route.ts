import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request, route: { params: { id: string } }) {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: route.params.id,
    },
  });

  return NextResponse.json(recipe, { status: 200 });
}
