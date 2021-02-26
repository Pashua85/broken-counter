import {combineReducers} from 'redux';
import { arrayReducer } from './arrayReducer';
import { numberReducer } from './numberReducer';

export const rootReducer = combineReducers({
  number: numberReducer,
  array: arrayReducer
})