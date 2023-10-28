import { Component, Input } from '@angular/core';
import { Joke } from '../../models/Joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent {
  @Input('joke')
  joke!: Joke;

  togglePunchline(joke: Joke) {
    joke.hide = !joke.hide;
  }
}
