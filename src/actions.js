export const ACTIVATE_CELL = 'ACTIVATE_CELL';
export const ACTIVATE_CELL_SETTINGS = 'ACTIVATE_CELL_SETTINGS';
export const ACTIVATE_SPACE = 'ACTIVATE_SPACE';
export const TOGGLE_MENU = 'TOGGLE_MENU';

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
