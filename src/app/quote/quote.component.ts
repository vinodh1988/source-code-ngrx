import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuoteState } from '../NgRx/quotereducer';
import { loadRandomQuote } from '../NgRx/quoteactions';
import { Observable } from 'rxjs';

interface AppState {
  quote: QuoteState;
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})

export class QuoteComponent {
  quote$ :Observable<string>;

  constructor(private store: Store<AppState>) {
    console.log(this.store)
    this.quote$= this.store.select(state => state.quote.quote)
  }

  getRandomQuote() {
    console.log("triggered")
    this.store.dispatch(loadRandomQuote());
  }
}
