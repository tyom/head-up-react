import get from 'lodash/get';
import { ADD_SPACE, UPDATE_WIDGET } from '../actions';

function widgetsReducer(updatedWidget) {
  return function cellsReducer(space) {
    if (!space.cells) {
      return space;
    }

    const cells = space.cells.map(cell => {
      if (get(cell, 'widget.id') === updatedWidget.id) {
        return {
          ...cell,
          widget: updatedWidget,
        };
      }
      return cell;
    });

    return {
      ...space,
      cells,
    };
  };
}

function spacesReducer(state = [], action) {
  switch (action.type) {
    case ADD_SPACE: {
      return [...state, action.payload];
    }
    case UPDATE_WIDGET: {
      return state.map(widgetsReducer(action.payload));
    }
    default:
      return state;
  }
}

export default spacesReducer;
