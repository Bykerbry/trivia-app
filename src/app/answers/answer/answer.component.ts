import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAnswer } from 'src/app/interfaces';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answerSet: IAnswer[];
  @Input() isAnswered: boolean;

  @Output() onAnswered = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
  }

  answerSelected() {
    this.isAnswered = true;
    this.onAnswered.emit()
  }

}
