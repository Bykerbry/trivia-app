import { Component } from '@angular/core';
import { TriviaApiService } from './trivia-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia-app';
  array: any;
  results: any;
  questions: any = [];
  incorrectAnswers: any = [];
  correctAnswers: any = [];


  constructor(public client: TriviaApiService) {

  }

  fetchAPI(eventC) {
    this.client.getFilteredTrivia(eventC).subscribe((res: any) => {
      res.results.forEach((res: any) => {
        this.questions.push(res.question);
        this.correctAnswers.push(res.correct_answer);
        this.incorrectAnswers.push(res.incorrect_answers);
        // console.log(this.questions);
      })
    
    });
  }
}
