import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipe: Recipe[] = [
    new Recipe(
      'Paneer Tikka',
      'Paneer Tikka is a popular and delicious tandoori snack where Paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.',
      'https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg',
      [
        new Ingredient('Paneer', 1),
        new Ingredient('Capsicum', 1),
        new Ingredient('Onions', 2),
      ]
    ),
    new Recipe(
      'Burger',
      'This Burger Recipe covers everything needed to make delightful veggie burgers from scratch, including how to prepare and pan fry delicious homemade vegetable patties.',
      'https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Onions', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipe.slice();
  }

  getRecipeById(id: number) {
    return this.recipe.slice()[id];
  }
}
