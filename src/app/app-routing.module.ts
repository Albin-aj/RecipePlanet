import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodRecipeComponent } from './component/food-recipe/food-recipe.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'single/:id', component: FoodRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
