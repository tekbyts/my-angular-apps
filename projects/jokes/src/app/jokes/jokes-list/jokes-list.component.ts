import { Component } from '@angular/core';
import { Joke } from '../../models/Joke';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css'],
})
export class JokesListComponent {
  public jokes: Array<Joke>;

  constructor() {
    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
        hide: true,
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
        hide: true,
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought ‘That’s not very mature’',
        hide: true,
      },
    ];
  }

  /**
   * @deprecated The method should not be used
   */
  public showHidePunchline(joke: Joke) {
    joke.hide = !joke.hide;
  }

  addJokeToTheList(joke: Joke) {
    this.jokes.unshift(joke);
  }
}
