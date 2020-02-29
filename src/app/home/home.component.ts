import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IAnswer, ICategory } from '../interfaces'

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  quizSetup: boolean = true;
  quizReady: boolean = false;
  category: string;
  difficulty: string;
  index: number = 0;

  @Input() questions: string[];
  @Input() answerSets: IAnswer[][];
  
  @Output() onSelectCategory = new EventEmitter<ICategory>()

  ngOnInit() {
    
  }

  // displays questions and answers
  startQuiz() {
    if (this.category && this.difficulty) {
      this.quizReady = true;
      this.quizSetup = false;
    }
  }
  setCategory(category: string) {
    this.category = category;
  }

  setDifficulty(difficulty: string) {
    this.difficulty = difficulty;
  }

  selectCategory() {
    this.onSelectCategory.emit(
      {
        category: this.category, 
        difficulty: this.difficulty
      });
  }

  onClickedNext(){
    if(this.index < 9) {
      this.index++
    } else {
      // Display Score
    }
    console.log(this.index, 'from home');
  }
  onClickedPrev() {
    if (this.index > 0 ) {
      this.index--
    }
    console.log(this.index, 'from home');
  }
}
