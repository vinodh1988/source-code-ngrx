import { createReducer, on } from '@ngrx/store';
import * as QuoteActions from './quoteactions';

export interface QuoteState {
  quote: string;
}

const initialState: QuoteState = {
  quote: 'Random Quote Randomly'
};

export const quoteReducer = createReducer(
  initialState,
  on(QuoteActions.randomQuoteLoaded, (state, { quote }) => ({
    ...state,
    quote
  }))
);
