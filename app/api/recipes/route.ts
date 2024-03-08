import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes, { status: 200 });
}
