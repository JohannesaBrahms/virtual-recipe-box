// enable CSS theme variables type - not enabled by default
import type {} from '@mui/material/themeCssVarsAugmentation';

enum Difficulty {
  beginner = 'beginner',
  intermediate = 'intermediate',
  pro = 'pro',
}

// TODO reconcile with lib/types
export type Recipe = {
  id: string;
  userId: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  date: string;
  editDate?: string;
  ingredients?: Ingredient[];
};

type Ingredient = {
  title: string;
  amount: number;
  unit: number;
};
