import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() index: number;
  @Input() answerSets: any[]; 

  @Output() onNextClicked = new EventEmitter<number>()
  @Output() onPrevClicked = new EventEmitter<number>()
  isAnswered: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.index);
  }

  onQuestionAnswered() {
    this.isAnswered = true;
  }

  nextBtn() {
    this.onNextClicked.emit()
    this.isAnswered = false;
  }

  previousBtn() {
    this.onPrevClicked.emit()
    this.isAnswered = false;
  }

  
}
