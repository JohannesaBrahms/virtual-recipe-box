import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request, route: { params: { id: string } }) {
  const recipe = await prisma.recipe.findUnique({
    where: {
      id: route.params.id,
    },
  });

  return NextResponse.json(recipe, { status: 200 });
}

export async function PATCH(request: Request) {
  //TODO
}
