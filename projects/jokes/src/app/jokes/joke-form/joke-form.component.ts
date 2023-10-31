import { Component, EventEmitter, Output } from '@angular/core';
import { Joke } from '../../models/Joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],
})
export class JokeFormComponent {
  @Output('jokeCreated') jokeCreated = new EventEmitter<Joke>();

  createJoke() {
    this.jokeCreated.emit(<Joke>{
      hide: true,
      punchline: 'A Punchline',
      setup: 'A Setup',
    });
  }
}
