import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(private TriviaApiService: TriviaApiService) { }

  category: string;
  difficulty: string;
  
  @Input() index;

  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()
  @Input() questions;

  ngOnInit() {
  }

  selectCategory() {
    this.onSelectCategory.emit(
      {
        category: this.category,
        difficulty: this.difficulty
      });
  }
}
