import * as redux from 'redux';
import createReducer, { HeadUpReducer } from './reducers';
import {
  activateCell,
  activateCellSettings,
  activateDashboard,
  toggleMenu,
} from './actions';

const initialState = {
  activeCell: null,
  activeCellSettings: null,
  activeDashboard: null,
  isMenuClosed: false,
};

describe('Reducers', () => {
  test('activate cell', () => {
    const result = HeadUpReducer(initialState, activateCell(2));
    expect(result).toHaveProperty('activeCell', 2);
  });

  test('deactivate cell', () => {
    const result = HeadUpReducer(
      {
        ...initialState,
        activeCell: 2,
      },
      activateCell(2)
    );
    expect(result).toHaveProperty('activeCell', null);
  });

  test('activate cell settings', () => {
    const result = HeadUpReducer(initialState, activateCellSettings(4));
    expect(result).toHaveProperty('activeCellSettings', 4);
  });

  test('deactivate cell settings', () => {
    const result = HeadUpReducer(
      {
        ...initialState,
        activeCellSettings: 4,
      },
      activateCellSettings(4)
    );
    expect(result).toHaveProperty('activeCellSettings', null);
  });

  test('activate dashboard', () => {
    const result = HeadUpReducer(initialState, activateDashboard(1));
    expect(result).toHaveProperty('activeDashboard', 1);
  });

  test('activate toggle menu', () => {
    const result = HeadUpReducer(initialState, toggleMenu());
    expect(result).toHaveProperty('isMenuClosed', true);
  });

  test('default', () => {
    const result = HeadUpReducer(initialState, { type: 'NON-EXISTENT' });
    expect(result).toEqual(initialState);
  });
});

describe('#createReducer', () => {
  test('combineReducers set up correctly', () => {
    jest.spyOn(redux, 'combineReducers');
    createReducer();

    expect(redux.combineReducers).toBeCalledWith({
      headup: HeadUpReducer,
    });
  });
});
