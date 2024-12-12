import { createReducer, on } from '@ngrx/store';
import * as MessageActions from './messageactions';

export interface MessageState {
  message: string | null;
}

export const initialState: MessageState = {
  message: "This is a great APP"
};

const _messageReducer = createReducer(
  initialState,
  on(MessageActions.showMessage, (state, { message }) => 
    
     ({
    ...state,
    message
  })
 )
)


export function messageReducer(state:any, action:any) {
  return _messageReducer(state, action);
}
