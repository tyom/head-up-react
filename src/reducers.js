import {combineReducers} from 'redux';
import assign from 'lodash/assign';

import {
  ACTIVATE_CELL,
  ACTIVATE_CELL_SETTINGS,
  ACTIVATE_DASHBOARD,
  TOGGLE_MENU

} from './actions';

function dashboardReducer(state={}, action) {
  switch (action.type) {
    case ACTIVATE_CELL:
      return assign({}, state, {
        activeCell: state.activeCell !== action.id ? action.id : null
      });
    case ACTIVATE_CELL_SETTINGS:
      return assign({}, state, {
        activeCellSettings: state.activeCellSettings !== action.id ? action.id : null
      });
    case ACTIVATE_DASHBOARD:
      return assign({}, state, {
        activeDashboard: action.id
      });
    case TOGGLE_MENU:
      return assign({}, state, {
        isMenuClosed: !state.isMenuClosed
      });
    default:
      return state;
  }
}

export default function createReducer() {
  return combineReducers({
    dashboardReducer
  });
}
