import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from 'src/services/recipe.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [];

  selectedRecipeSubscription: Subscription;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.selectedRecipeSubscription =
      this.recipeService.selectedRecipe.subscribe((recipe) => {
        this.selectedRecipe = recipe;
      });
  }

  ngOnDestroy(): void {
    this.selectedRecipeSubscription.unsubscribe();
  }
}
