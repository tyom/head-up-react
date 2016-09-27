'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ellipsisH = require('react-icons/lib/fa/ellipsis-h');

var _ellipsisH2 = _interopRequireDefault(_ellipsisH);

var _constants = require('../../constants');

var _actions = require('../../actions');

var _styles = {
  "Cell": "Cell_qrRK",
  "Cell-header": "Cell-header_34qI",
  "Cell-menuBtn": "Cell-menuBtn_3Ask",
  "focusable": "focusable_OyjT",
  "Cell-menuIcon": "Cell-menuIcon_2sOi",
  "Cell-container": "Cell-container__y4C",
  "Cell-inner": "Cell-inner_23m2",
  "Cell-settings": "Cell-settings_9ZKF",
  "Cell-content": "Cell-content_xmuW",
  "is-active": "is-active_2tY8",
  "is-configuring": "is-configuring_38_J"
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Content = function Content() {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default['Cell-content'] },
    _react2.default.createElement(
      'h4',
      null,
      'Content'
    )
  );
};

var Settings = function Settings() {
  return _react2.default.createElement(
    'aside',
    { className: _styles2.default['Cell-settings'] },
    _react2.default.createElement(
      'h4',
      null,
      'Settings'
    )
  );
};

function Cell(_ref) {
  var _classNames;

  var title = _ref.title;
  var _ref$size = _ref.size;
  var size = _ref$size === undefined ? '1' : _ref$size;
  var isActive = _ref.isActive;
  var isConfiguring = _ref.isConfiguring;
  var onClick = _ref.onClick;
  var onSettingsClick = _ref.onSettingsClick;

  var dimensions = size.split(/:|\//).map(function (d) {
    return d / _constants.GRID_SIZE * 100 + '%';
  });

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(_styles2.default.Cell, (_classNames = {}, _defineProperty(_classNames, _styles2.default['is-active'], isActive), _defineProperty(_classNames, _styles2.default['is-configuring'], isConfiguring), _classNames)),
      onClick: onClick,
      style: {
        width: dimensions[0],
        height: dimensions[1] || dimensions[0]
      }
    },
    _react2.default.createElement(
      'article',
      { className: _styles2.default['Cell-container'] },
      _react2.default.createElement(
        'header',
        { className: _styles2.default['Cell-header'] },
        title,
        isActive ? _react2.default.createElement(
          'button',
          { className: _styles2.default['Cell-menuBtn'], onClick: function onClick() {
              return onSettingsClick(title);
            } },
          _react2.default.createElement(_ellipsisH2.default, { className: _styles2.default['Cell-menuIcon'] }),
          _react2.default.createElement(
            'span',
            null,
            'Menu'
          )
        ) : null
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default['Cell-inner'] },
        _react2.default.createElement(
          Content,
          null,
          'Content'
        ),
        _react2.default.createElement(Settings, null)
      )
    )
  );
}

Cell.propTypes = {
  onClick: _react.PropTypes.func,
  onSettingsClick: _react.PropTypes.func,
  size: _react.PropTypes.string,
  title: _react.PropTypes.string,
  isActive: _react.PropTypes.bool,
  isConfiguring: _react.PropTypes.bool
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    isActive: ownProps.title === state.dashboardReducer.activeCell,
    isConfiguring: ownProps.title === state.dashboardReducer.activeCellSettings
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick(evt) {
      var isButton = !!evt.target.closest('.' + _styles2.default['Cell-menuBtn']);
      if (isButton) {
        return;
      }
      dispatch((0, _actions.activateCell)(ownProps.title));
    },
    onSettingsClick: function onSettingsClick(title) {
      return dispatch((0, _actions.activateCellSettings)(title));
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Cell);