export interface FoodItem {
  name: string;
  description: string;
  quantity: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  micronutrients: string;
  fiber: string;
}

export interface NegligibleItem {
  name: string;
  description: string;
  micronutrients: string;
}

export interface NutritionalTotal {
  calories: string;
  protein: string;
  carbs: string;
  fiber: string;
  fat: string;
  saturatedFat: string;
  monounsaturatedFat: string;
  polyunsaturatedFat: string;
}

export interface HealthConsiderations {
  strengths: string[];
  considerations: string[];
}

export interface MealAnalysisResponse {
  output: {
    summary: string;
    food: FoodItem[];
    total: NutritionalTotal;
    negligibleCalories: NegligibleItem[];
    notableMicronutrientsAndHealthConsiderations: HealthConsiderations;
  };
}
