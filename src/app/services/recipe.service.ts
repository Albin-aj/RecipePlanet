import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Hit, Next, Recipe, RootObject } from '../model/recipe';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  $isTrue =new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  BASE_URL = environment.Base_url;
  API_KEY = environment.Api_Key;
  loading = new Subject<boolean>()

  getRecipe(input: any):Observable<Hit[]> {
    console.log(input);

    this.loading.next(true)
    return this.http
      .get<RootObject>(this.BASE_URL, {
        params: {
          type: 'public',
          q: input,
          app_id: 'bbbf3cef',
          app_key: this.API_KEY,
        },
      })
      .pipe(
        map((res) => {
          return res.hits.map((res) => {
            // this.loading.next(false)
            return res
          });
        })
      );
  }



  getOne(URL:any):Observable<Hit>{
    console.log('HIiiiiii');

   return this.http.get<Hit>(URL)

  }
}
