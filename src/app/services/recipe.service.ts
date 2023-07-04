import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Hit, RootObject } from '../model/recipe';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  BASE_URL = environment.Base_url;
  API_KEY = environment.Api_Key;

  getRecipe(input: any):Observable<Hit[]> {
    console.log(input);
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
          return res.hits
        })
      )
  }

  getOne(URL:any):Observable<Hit>{
   return this.http.get<Hit>(URL)
  }

}
