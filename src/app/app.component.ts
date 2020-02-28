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
  // incorrectAnswers: any = [];
  // correctAnswers: any = [];
  answers: any = []


  constructor(public client: TriviaApiService) {

  }

  fetchAPI(eventC) {
    this.client.getFilteredTrivia(eventC).subscribe((res: any) => {
      res.results.forEach((res: any) => {

        this.questions.push(res.question);

        const incorrect = res.incorrect_answers.map(answer => {
          return {
            answer: answer,
            isCorrect: false
          }
        })

        const correct = {
          answer: res.correct_answer,
          isCorrect: true
        }

        let answerSet = [...incorrect, correct];
        answerSet = answerSet.map(i => JSON.stringify(i))

        
        for (let i = answerSet.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [answerSet[i], answerSet[j]] = [answerSet[j], answerSet[i]];
        }

        answerSet = answerSet.map(i => JSON.parse(i))

        this.answers.push(answerSet)
      })
    
    });
  }
}
