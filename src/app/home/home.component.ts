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
  finalScore: boolean = false;
  
  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()
  // @Output() indexMinus = new EventEmitter<any>()
  // @Output() indexAdd = new EventEmitter<any>()
  
  @Input() questions: any;
  @Input() answers: any;
  // @Input() correctAnswers: any;
  // @Input() incorrectAnswers: any;

  ngOnInit() {
    
  }

  finalScoreSet() {
    this.finalScore = true;
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

  previousBtn() {
    if (this.index <= 0) {
      prompt("Yikes")
    } else {
    this.index--;
    }
  }

  // nextBtn() {
  //   if (this.index == 9) {
  //     this.finalScoreSet();
  //   } else {
  //     this.index++;
  //   }
  //   this.index--
  //   // this.indexMinus.emit(this.index--)
  // }

  nextBtn() {
    if(this.index > 0) {
      this.index++
    }
    // this.indexAdd.emit(this.index++)
  }

  
}
