import { createStore, combineReducers } from 'redux';
import character from './character';

export default createStore(
  combineReducers({
    character
  })
);