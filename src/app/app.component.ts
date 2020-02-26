import { Component } from '@angular/core';
import { TriviaApiService } from './trivia-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trivia-app';

  constructor(public client: TriviaApiService) {

  }

  fetchAPI(eventC, eventD) {
    this.client.getFilteredTrivia(eventC, eventD);
  }
}
