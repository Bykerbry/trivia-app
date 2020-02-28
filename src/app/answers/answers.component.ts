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
  @Input() index: number;
  @Input() answers: any[]; 

  @Output() indexMinus = new EventEmitter<any>()
  @Output() indexAdd = new EventEmitter<any>()
  // @Input() index;

  constructor() { }

  ngOnInit() {
    console.log(this.answers, 'after');
    console.log(this.index);
  }

  resultBtn() {
    this.toggle = false;
  }

  previousBtn() {
    this.indexMinus.emit();
  }

  nextBtn() {
    this.indexAdd.emit();
<<<<<<< HEAD
    this.revertBtn = true;
    console.log("hello");
=======
    this.toggle = true;
    this.btnClicked = false;
    
>>>>>>> 2c1d46e14b2fba563a640ff09a419ee19eacc24f
  }

}
