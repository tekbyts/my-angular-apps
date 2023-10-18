import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
})
export class JokesComponent {
  setup: string;
  punchline: string;

  constructor() {
    this.setup = 'What did the cheese say when it looked in the mirror?';
    this.punchline = 'Halloumi (Hello Me)';
  }
}
