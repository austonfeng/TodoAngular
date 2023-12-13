import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './app.action';
import { Appstate } from './appstate';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
};
 

/**
 *  global reducer to manage the state
 */
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);