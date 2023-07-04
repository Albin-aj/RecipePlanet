import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, switchMap } from 'rxjs';
import { Hit } from 'src/app/model/recipe';
// import { OwlOptions } from 'ngx-owl-carousel-o'
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  loadingg: boolean = false;
  recipe!: Hit[]
  HitList?: Observable<Hit[]>;
  istrue:boolean = false

  input: FormGroup = new FormGroup({
    inputs: new FormControl(),
  });

  constructor(private recipeservice: RecipeService) {
    this.HitList = this.input.valueChanges.pipe(
      debounceTime(100),
      switchMap((val) => {
        return this.recipeservice.getRecipe(val.inputs);
      })
    );

    this.HitList.subscribe((res) => {

      this.recipe = res
    })
    // this.loadingg = true
    // this.recipeservice.getImg().subscribe(val=>{
    //   this.recipe = val
    //   this.loadingg = false
    //   console.log(this.recipe);
    // })
    // this.recipeservice.loading.subscribe(val=>this.loadingg = val)

  }
  ngOnInit(): void {
    this.homePage()
    }


    homePage(){
      this.recipeservice.getRecipe('veg').subscribe(val=>{
        this.recipe = val
        console.log(this.recipe);
        })
    }

}



