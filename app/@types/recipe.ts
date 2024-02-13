type Difficulty = 'beginner' | 'intermediate' | 'pro';

type Recipe = {
  id: string;
  accountId: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  date: string;
  ingredients?: Ingredient[];
};

type Ingredient = {
  title: string;
  amount: number;
  unit: number;
};
