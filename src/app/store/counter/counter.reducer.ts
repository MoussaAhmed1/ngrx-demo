import { createReducer, on } from '@ngrx/store';
import {
  decreaseCounter,
  increaseCounter,
  resetCounter,
} from './counter.action';

const INITIAL_STATE = 0;
export const counterReducer = createReducer(
  INITIAL_STATE,
  on(increaseCounter, (state) => {
    return state + 1;
  }),
  on(decreaseCounter, (state) => {
    return state - 1;
  }),
  on(resetCounter, (state) => {
    return INITIAL_STATE;
  })
);
