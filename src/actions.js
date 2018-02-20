export const ACTIVATE_CELL = 'ACTIVATE_CELL';
export const ACTIVATE_CELL_SETTINGS = 'ACTIVATE_CELL_SETTINGS';
export const ACTIVATE_SPACE = 'ACTIVATE_SPACE';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const ADD_SPACE = 'ADD_SPACE';
export const ADD_WIDGET = 'ADD_WIDGET';

export function activateCell(id) {
  return { id, type: ACTIVATE_CELL };
}

export function activateCellSettings(id) {
  return { id, type: ACTIVATE_CELL_SETTINGS };
}

export function activateSpace(id) {
  return { id, type: ACTIVATE_SPACE };
}

export function toggleMenu() {
  return { type: TOGGLE_MENU };
}

export function addSpace(payload) {
  return { type: ADD_SPACE, payload };
}

export function addWidget(payload) {
  return { type: ADD_WIDGET, payload };
}
