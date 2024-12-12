import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import * as QuoteActions from './quoteactions';

@Injectable()
export class QuoteEffects {
  loadRandomQuote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuoteActions.loadRandomQuote),
      mergeMap(() =>
        this.http.get<{ content: string }>('http://api.quotable.io/random').pipe(
          map(response => {
            console.log(response);
            return QuoteActions.randomQuoteLoaded({ quote: response.content })
        })
        )
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
