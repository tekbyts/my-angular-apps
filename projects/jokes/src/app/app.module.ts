import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JokesComponent } from './jokes/jokes.component';
import { JokesListComponent } from './jokes/jokes-list/jokes-list.component';

// import { AppComponent } from './app.component';

@NgModule({
  declarations: [JokesComponent, JokesListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [JokesListComponent],
})
export class AppModule {}
