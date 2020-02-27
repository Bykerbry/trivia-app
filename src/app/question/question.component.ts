import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(private TriviaApiService: TriviaApiService) { }

  category: string = 'history';
  difficulty: string = 'easy';
  @Output() onSelectCategory = new EventEmitter<any>()
  @Output() onSelectDifficulty = new EventEmitter<any>()
  
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
