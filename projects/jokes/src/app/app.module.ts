import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokesListComponent } from './jokes/jokes-list/jokes-list.component';
import { AppComponent } from './app.component';
import { JokeComponent } from './jokes/joke/joke.component';

// import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, JokesListComponent, JokeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
