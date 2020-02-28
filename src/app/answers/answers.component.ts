import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  toggle = true;
  @Input() index: number;
  @Input() answers: any[]; 

  constructor() { }

  ngOnInit() {
    console.log(this.answers, 'after');
    console.log(this.index);
  }

  resultBtn() {
    this.toggle = !this.toggle;
  }

  
}
