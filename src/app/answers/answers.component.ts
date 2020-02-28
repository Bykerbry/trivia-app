import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  toggle = true;
  btnClicked = true;

  @Input() incorrectAnswers: any; 
  @Input() correctAnswers: any; 

  @Output() indexMinus = new EventEmitter<any>()
  @Output() indexAdd = new EventEmitter<any>()
  @Input() index;

  constructor() { }

  ngOnInit() {
    console.log(this.correctAnswers);
    console.log(this.incorrectAnswers);
  }

  resultBtn() {
    this.toggle = false;
  }

  previousBtn() {
    this.indexMinus.emit();
  }

  nextBtn() {
    this.indexAdd.emit();
    this.toggle = true;
    this.btnClicked = false;
    
  }

}
