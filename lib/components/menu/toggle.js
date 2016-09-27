'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ellipsisV = require('react-icons/lib/fa/ellipsis-v');

var _ellipsisV2 = _interopRequireDefault(_ellipsisV);

var _angleLeft = require('react-icons/lib/fa/angle-left');

var _angleLeft2 = _interopRequireDefault(_angleLeft);

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

var Toggle = function Toggle(_ref) {
  var onClick = _ref.onClick;
  var isMenuClosed = _ref.isMenuClosed;
  return _react2.default.createElement(
    'button',
    { className: _styles2.default['Menu-toggle'], onClick: onClick, type: 'button' },
    isMenuClosed ? _react2.default.createElement(_ellipsisV2.default, { className: _styles2.default['Menu-toggleIcon'] }) : _react2.default.createElement(_angleLeft2.default, { className: _styles2.default['Menu-toggleIcon'] }),
    _react2.default.createElement(
      'span',
      null,
      isMenuClosed ? 'Open' : 'Close',
      ' menu'
    )
  );
};

Toggle.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  isMenuClosed: _react.PropTypes.bool
};

exports.default = Toggle;