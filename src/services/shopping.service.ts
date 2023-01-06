import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable()
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

  recipeToShoppingList(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }
}
