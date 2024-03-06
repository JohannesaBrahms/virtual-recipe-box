import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Please enter password',
  }),
});

export type Login = z.infer<typeof LoginSchema>;

const RecipeSchema = z.object({
  id: z.string(),
  accountId: z.string(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(['beginner', 'intermediate', 'pro']),
  editDate: z.string(),
  date: z.string(),
});

export const CreateRecipeSchema = RecipeSchema.omit({
  id: true,
  accountId: true,
  editDate: true,
  date: true,
});

export const UpdateRecipeSchema = RecipeSchema.omit({
  id: true,
  accountId: true,
  editDate: true,
  date: true,
});