import { z } from 'zod';

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
});

export type NewPassword = z.infer<typeof NewPasswordSchema>;

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export type Reset = z.infer<typeof ResetSchema>;

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export type Login = z.infer<typeof LoginSchema>;

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export type Register = z.infer<typeof RegisterSchema>;

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
