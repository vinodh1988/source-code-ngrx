import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1),
  on(CounterActions.reset, () => initialState)
);

export function counterReducer(state:any, action:any) {
  return _counterReducer(state, action); //passes previous state and current action
}
