'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createReducer;

var _redux = require('redux');

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dashboardReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.ACTIVATE_CELL:
      return (0, _assign2.default)({}, state, {
        activeCell: state.activeCell !== action.id ? action.id : null
      });
    case _actions.ACTIVATE_CELL_SETTINGS:
      return (0, _assign2.default)({}, state, {
        activeCellSettings: state.activeCellSettings !== action.id ? action.id : null
      });
    case _actions.ACTIVATE_DASHBOARD:
      return (0, _assign2.default)({}, state, {
        activeDashboard: action.id
      });
    case _actions.TOGGLE_MENU:
      return (0, _assign2.default)({}, state, {
        isMenuClosed: !state.isMenuClosed
      });
    default:
      return state;
  }
}

function createReducer() {
  return (0, _redux.combineReducers)({
    dashboardReducer: dashboardReducer
  });
}