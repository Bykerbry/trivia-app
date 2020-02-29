import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  @Input() questions: any;
  @Input() answerSets: any;
  
  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()

  ngOnInit() {
    
  }

  // displays questions and answers
  startQuiz() {
    if (this.category && this.difficulty) {
      this.quizReady = true;
      this.quizSetup = false;
    }
  }
  setCategory(category) {
    this.category = category;
  }

  setDifficulty(difficulty) {
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
