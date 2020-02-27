import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  index = 0;
  toggle = true;

  @Input() incorrectAnswers: any; 
  @Input() correctAnswers: any; 

  constructor() { }

  ngOnInit() {
    console.log(this.correctAnswers);
    console.log(this.incorrectAnswers);
  }

  toggleBtn() {
    this.toggle = !this.toggle;
    console.log(this.toggle)
  }

}
