import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor() { }

  category: string;
  difficulty: string;

  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()
  @Input() questions;
  @Input() index: number;

  ngOnInit() {
    console.log(this.questions);
  }

  selectCategory() {
    this.onSelectCategory.emit(
      {
        category: this.category,
        difficulty: this.difficulty
      });
  }
}
