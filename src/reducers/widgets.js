import { ADD_WIDGET } from '../actions';

function spacesReducer(state = [], action) {
  switch (action.type) {
    case ADD_WIDGET: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

export default spacesReducer;
