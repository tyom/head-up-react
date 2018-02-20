import { combineReducers } from 'redux';
import headupReducer from './headup';
import spacesReducer from './spaces';
import widgetsReducer from './widgets';

export default function createReducer() {
  return combineReducers({
    headup: headupReducer,
    spaces: spacesReducer,
    widgets: widgetsReducer,
  });
}
