import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Hit, Recipe } from 'src/app/model/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-food-recipe',
  templateUrl: './food-recipe.component.html',
  styleUrls: ['./food-recipe.component.scss'],
})
export class FoodRecipeComponent {
  $hit!: Observable<Hit>;
  $data!: Observable<Recipe>

  constructor(
    private activatedroute: ActivatedRoute,
    private service: RecipeService
  ) {
    this.$hit = this.activatedroute.params.pipe(
      switchMap((res) => {
        return this.service.getOne(res['id']);
      })
    );

    this.$data = this.$hit.pipe(map(res => {
      return res.recipe
    }))

  }
}
