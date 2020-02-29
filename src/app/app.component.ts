import { Component } from '@angular/core';
import { TriviaApiService } from './trivia-api.service';
import { ICategory, IAnswer } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia-app';
  questions: string[] = [];
  answerSets: IAnswer[][] = []


  constructor(public client: TriviaApiService) {

  }

  fetchAPI(eventC: ICategory) {
    this.client.getFilteredTrivia(eventC).subscribe((res: any) => {
      res.results.forEach((res: any) => {

        this.questions.push(res.question);

        let charCode = 97;

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
        answerSet.map(i => i.option = String.fromCharCode(charCode++).toUpperCase())

        this.answerSets.push(answerSet)
      })
    });
  }
}
