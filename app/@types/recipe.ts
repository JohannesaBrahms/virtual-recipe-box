type Difficulty = 'beginner' | 'intermediate' | 'pro';

type Recipe = {
  id: string;
  authorId: string;
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
