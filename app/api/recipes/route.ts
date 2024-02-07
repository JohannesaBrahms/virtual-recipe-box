import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const recipes = await prisma.recipe.findMany();
  return NextResponse.json(recipes, { status: 200 });
}