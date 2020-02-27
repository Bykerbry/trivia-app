import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  category: string;
  difficulty: string;
  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()
  
  @Input() questions: any;
  @Input() correctAnswers: any;
  @Input() incorrectAnswers: any;

  ngOnInit() {
  }

  // displays questions and answers
  startQuiz() {
    this.quizReady = true;
    this.quizSetup = false;
    return
  }
  setCategory(category) {
    this.category = category;
    console.log(category);
  }

  setDifficulty(difficulty) {
    this.difficulty = difficulty;
    console.log(difficulty);
  }

  selectCategory() {
    this.onSelectCategory.emit(
      {
        category: this.category, 
        difficulty: this.difficulty
      });

  }
}
