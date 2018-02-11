import { combineReducers } from 'redux';
import headupReducer from './headup';
import spacesReducer from './spaces';

export default function createReducer() {
  return combineReducers({
    headup: headupReducer,
    spaces: spacesReducer,
    widgets: [],
  });
}
