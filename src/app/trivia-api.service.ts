import { Injectable, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TriviaApiService {
  private baseFilterUrl: string = "https://opentdb.com/api.php?amount=10&type=multiple";

  constructor(private http: HttpClient) { }

//   "response_code": 0,
// "results": [
// {
// "category": "Entertainment: Music",
// "type": "multiple",
// "difficulty": "medium",
// "question": "Who is the founder and leader of industrial rock band, &#039;Nine Inch Nails&#039;?",
// "correct_answer": "Trent Reznor",
// "incorrect_answers": [
// "Marilyn Manson",
// "Robin Finck",
// "Josh Homme"
// ]
// }

  history: number;
  sports: number;
  animals: number;
  videoGames: number;

  results: any [] = [];
  answers: any [] = [];
  category: string;
  difficult: string;

  fetchApi(category: string, difficult: string) {
    category = this.category;
    difficult = this.difficult;
    return 
  }

  categories = {
    history: "23",
    sports: "21",
    animals: "27",
    videoGames: "15"
  }

  difficulty = {
    easy: "easy",
    medium: "medium",
    hard: "hard"
  }

  getFilteredTrivia(category: string, difficult: string) {
    console.log(category);
    return this.http.get(
      `${this.baseFilterUrl}&category=${this.categories[category]}&difficulty=${this.difficulty[difficult]}&type=multiple`
    );
  }
}
