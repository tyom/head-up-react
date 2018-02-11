import {
  ACTIVATE_CELL,
  ACTIVATE_CELL_SETTINGS,
  ACTIVATE_SPACE,
  TOGGLE_MENU,
} from '../actions';

function headupReducer(state = {}, action) {
  switch (action.type) {
    case ACTIVATE_CELL:
      return {
        ...state,
        activeCell: state.activeCell !== action.id ? action.id : null,
      };
    case ACTIVATE_CELL_SETTINGS:
      return {
        ...state,
        activeCellSettings:
          state.activeCellSettings !== action.id ? action.id : null,
      };
    case ACTIVATE_SPACE:
      return {
        ...state,
        activeSpace: action.id,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuClosed: !state.isMenuClosed,
      };
    default:
      return state;
  }
}

export default headupReducer;
