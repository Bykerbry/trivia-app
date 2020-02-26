import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TriviaApiService } from '../trivia-api.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  @Output() history = new EventEmitter();
  @Output() sports = new EventEmitter();
  @Output() animals = new EventEmitter();
  @Output() videoGames = new EventEmitter();

  @Output() easy = new EventEmitter();
  @Output() medium = new EventEmitter();
  @Output() hard = new EventEmitter();

  constructor(private TriviaApiService: TriviaApiService) { }

  category : string = 'history';
  difficulty : string = 'easy';
  onSelectCategory : any;
  onSelectDifficulty : any;
  
  ngOnInit() {
  }

  selectCategory() {
    this.onSelectCategory.emit(this.category)
  }

  selectDifficulty() {
    this.onSelectDifficulty.emit(this.difficulty)

  }
}
