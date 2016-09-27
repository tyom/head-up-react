'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activateCell = activateCell;
exports.activateCellSettings = activateCellSettings;
exports.activateDashboard = activateDashboard;
exports.toggleMenu = toggleMenu;
var ACTIVATE_CELL = exports.ACTIVATE_CELL = 'ACTIVATE_CELL';
var ACTIVATE_CELL_SETTINGS = exports.ACTIVATE_CELL_SETTINGS = 'ACTIVATE_CELL_SETTINGS';
var ACTIVATE_DASHBOARD = exports.ACTIVATE_DASHBOARD = 'ACTIVATE_DASHBOARD';
var TOGGLE_MENU = exports.TOGGLE_MENU = 'TOGGLE_MENU';

function activateCell(id) {
  return { id: id, type: ACTIVATE_CELL };
}

function activateCellSettings(id) {
  return { id: id, type: ACTIVATE_CELL_SETTINGS };
}

function activateDashboard(id) {
  return { id: id, type: ACTIVATE_DASHBOARD };
}

function toggleMenu() {
  return { type: TOGGLE_MENU };
}