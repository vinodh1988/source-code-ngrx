import { createAction, props } from '@ngrx/store';

export const loadRandomQuote = 
createAction('[Quote] Load Random Quote');
//used to only trigger effect
export const randomQuoteLoaded =
 createAction('[Quote] Random Quote Loaded', props<{ quote: string }>());
                                         //dispatched by an effect