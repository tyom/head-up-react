import { combineReducers } from 'redux';

import {
  ACTIVATE_CELL,
  ACTIVATE_CELL_SETTINGS,
  ACTIVATE_DASHBOARD,
  TOGGLE_MENU,
} from './actions';

function HeadUpReducer(headupState = {}, action) {
  switch (action.type) {
    case ACTIVATE_CELL:
      return {
        ...headupState,
        activeCell: headupState.activeCell !== action.id ? action.id : null,
      };
    case ACTIVATE_CELL_SETTINGS:
      return {
        ...headupState,
        activeCellSettings:
          headupState.activeCellSettings !== action.id ? action.id : null,
      };
    case ACTIVATE_DASHBOARD:
      return {
        ...headupState,
        activeDashboard: action.id,
      };
    case TOGGLE_MENU:
      return {
        ...headupState,
        isMenuClosed: !headupState.isMenuClosed,
      };
    default:
      return headupState;
  }
}

export default function createReducer() {
  return combineReducers({
    headup: HeadUpReducer,
  });
}
