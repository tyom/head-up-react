export const ACTIVATE_CELL = 'ACTIVATE_CELL';
export const ACTIVATE_CELL_SETTINGS = 'ACTIVATE_CELL_SETTINGS';
export const ACTIVATE_DASHBOARD = 'ACTIVATE_DASHBOARD';
export const TOGGLE_MENU = 'TOGGLE_MENU';

export function activateCell(id) {
  return {id, type: ACTIVATE_CELL};
}

export function activateCellSettings(id) {
  return {id, type: ACTIVATE_CELL_SETTINGS};
}

export function activateDashboard(id) {
  return {id, type: ACTIVATE_DASHBOARD};
}

export function toggleMenu() {
  return {type: TOGGLE_MENU};
}
