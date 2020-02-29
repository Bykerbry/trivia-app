import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ICategory } from './interfaces'

@Injectable({
  providedIn: 'root'
})

export class TriviaApiService {
  private baseFilterUrl: string = "https://opentdb.com/api.php?amount=10&type=multiple";

  constructor(private http: HttpClient) { }

  getFilteredTrivia(category: ICategory) {
    return this.http.get(
      `${this.baseFilterUrl}&category=${category.category}&difficulty=${category.difficulty}&type=multiple`
    );
  }
}
