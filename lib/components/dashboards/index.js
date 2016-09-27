'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _menu = require('../menu');

var _menu2 = _interopRequireDefault(_menu);

var _styles = {
  "Dashboards": "Dashboards_3vr8",
  "Dashboards-collection": "Dashboards-collection_cKu4"
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboards = function (_React$Component) {
  _inherits(Dashboards, _React$Component);

  function Dashboards() {
    _classCallCheck(this, Dashboards);

    return _possibleConstructorReturn(this, (Dashboards.__proto__ || Object.getPrototypeOf(Dashboards)).apply(this, arguments));
  }

  _createClass(Dashboards, [{
    key: 'render',
    value: function render() {
      if (!this.props.children) {
        return;
      }
      var menuItems = this.props.children.map(function (dashboard) {
        return dashboard.props.name;
      });

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.Dashboards },
        _react2.default.createElement(_menu2.default, { items: menuItems }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default['Dashboards-collection'] },
          this.props.children
        )
      );
    }
  }]);

  return Dashboards;
}(_react2.default.Component);

Dashboards.propTypes = {
  children: _react.PropTypes.array.isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    cells: ownProps.children
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Dashboards);