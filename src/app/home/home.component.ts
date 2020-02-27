import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private TriviaApiService: TriviaApiService) { }

  quizSetup: boolean = true;
  quizReady: boolean = false;
  category: string = 'history';
  difficulty: string = 'easy';
  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()

  ngOnInit() {
  }

  // displays questions and answers
  startQuiz() {
    this.quizReady = true;
    this.quizSetup = false;
    return
  }

  selectCategory() {
    this.onSelectCategory.emit(
      {
        category: this.category, 
        difficulty: this.difficulty
      });

  }
}
