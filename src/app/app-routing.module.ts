import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodRecipeComponent } from './component/food-recipe/food-recipe.component';

const routes: Routes = [
  { path: 'single/:id', component: FoodRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
