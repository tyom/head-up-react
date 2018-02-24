export const ACTIVATE_CELL = 'ACTIVATE_CELL';
export const ACTIVATE_CELL_SETTINGS = 'ACTIVATE_CELL_SETTINGS';
export const ACTIVATE_SPACE = 'ACTIVATE_SPACE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const ADD_SPACE = 'ADD_SPACE';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';

export function activateCell(id) {
  return { type: ACTIVATE_CELL, id };
}

export function activateCellSettings(id) {
  return { type: ACTIVATE_CELL_SETTINGS, id };
}

export function activateSpace(id) {
  return { type: ACTIVATE_SPACE, id };
}

export function toggleMenu() {
  return { type: TOGGLE_MENU };
}

export function addSpace(payload) {
  return { type: ADD_SPACE, payload };
}

export function updateWidget(id, payload) {
  return { type: UPDATE_WIDGET, id, payload };
}
