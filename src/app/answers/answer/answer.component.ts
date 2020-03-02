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
  @Input() isCorrect: boolean;
  @Output() onAnswered = new EventEmitter<boolean>()
  @Output() addToCorrect = new EventEmitter<number>();

  correctScore: number = 0;

  constructor() { }

  ngOnInit() {
  }

  answerSelected(correct) {
    this.isAnswered = true;
    this.onAnswered.emit();

    if (correct) {
      this.correctScore += 1;
      this.addToCorrect.emit(this.correctScore);
    }
    console.log(this.correctScore);
  }

}
