import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TriviaApiService {
  private baseQueryUrl: string = "https://opentdb.com/api.php?amount=10";
  private baseFilterUrl: string = "https://opentdb.com/api.php?amount=10&type=multiple";
  private category: string[] = [
    "23", //history
    "21", //sports
    "27", //animals
    "15" //video games
  ];
  private difficulty: string[] = [
    "easy",
    "medium",
    "hard"
  
  ];

  constructor(private http: HttpClient) { }

   // calls movie api
   fetchTriviaApi() {
    return this.http.get(
      `${this.baseQueryUrl}/`
    );
  }

  getFilteredTrivia() {
    return this.http.get(
      `${this.baseFilterUrl}&category=${this.category[0]}&difficulty=${this.difficulty[0]}&type=multiple`
    );
  }
}
