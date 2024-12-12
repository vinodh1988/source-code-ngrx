import { createAction, props } from '@ngrx/store';

export const showMessage = createAction(
  '[Message] Show Message',
  props<{ message: string }>() // This action should be dispatched with object of type {message:string}
);
/*
When the action runs
we can expect an object return with a property named message */