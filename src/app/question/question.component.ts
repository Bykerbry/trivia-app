import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  @Input() questions;
  @Input() index: number;

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
