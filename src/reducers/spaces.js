import { ADD_SPACE } from '../actions';

function spacesReducer(state = [], action) {
  switch (action.type) {
    case ADD_SPACE: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}

export default spacesReducer;
