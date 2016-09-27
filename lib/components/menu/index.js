'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require('../../actions');

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

var _styles = {
  "Menu": "Menu_18v1",
  "Menu-list": "Menu-list_XIws",
  "Menu-item": "Menu-item_2gQd",
  "Menu-toggle": "Menu-toggle_vy-X",
  "focusable": "focusable_1Csp",
  "Menu-toggleIcon": "Menu-toggleIcon_1WFX",
  "is-hidden": "is-hidden_6zwW",
  "is-active": "is-active_IjaS"
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Menu(_ref) {
  var _ref$items = _ref.items;
  var items = _ref$items === undefined ? [] : _ref$items;
  var _ref$isMenuClosed = _ref.isMenuClosed;
  var isMenuClosed = _ref$isMenuClosed === undefined ? false : _ref$isMenuClosed;
  var _ref$activeDashboard = _ref.activeDashboard;
  var activeDashboard = _ref$activeDashboard === undefined ? items[0] : _ref$activeDashboard;
  var onMenuItemClick = _ref.onMenuItemClick;
  var onToggleClick = _ref.onToggleClick;

  if (!items.length) {
    return;
  }

  return _react2.default.createElement(
    'nav',
    {
      className: (0, _classnames2.default)(_styles2.default.Menu, _defineProperty({}, _styles2.default['is-hidden'], isMenuClosed))
    },
    _react2.default.createElement(_toggle2.default, { onClick: onToggleClick, isMenuClosed: isMenuClosed }),
    _react2.default.createElement(
      'ul',
      { className: _styles2.default['Menu-list'] },
      items.map(function (item) {
        return _react2.default.createElement(
          'li',
          {
            key: (0, _kebabCase2.default)(item),
            className: (0, _classnames2.default)(_styles2.default['Menu-item'], _defineProperty({}, _styles2.default['is-active'], item === activeDashboard)),
            onClick: function onClick() {
              return onMenuItemClick(item);
            }
          },
          item
        );
      })
    )
  );
}

Menu.propTypes = {
  items: _react.PropTypes.array,
  onMenuItemClick: _react.PropTypes.func,
  onToggleClick: _react.PropTypes.func,
  activeDashboard: _react.PropTypes.string,
  isMenuClosed: _react.PropTypes.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeDashboard: state.dashboardReducer.activeDashboard,
    isMenuClosed: state.dashboardReducer.isMenuClosed
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onToggleClick: function onToggleClick() {
      return dispatch((0, _actions.toggleMenu)());
    },
    onMenuItemClick: function onMenuItemClick(name) {
      return dispatch((0, _actions.activateDashboard)(name));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Menu);