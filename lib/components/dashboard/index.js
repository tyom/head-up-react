'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _kebabCase = require('lodash/kebabCase');

var _kebabCase2 = _interopRequireDefault(_kebabCase);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = {
  "Dashboard": "Dashboard_3x-S",
  "is-active": "is-active_30cm"
};

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.isActive) {
        return;
      }
      // FIXME: Do away without setTimeout
      var d = this._dashboard;
      setTimeout(function () {
        d.scrollIntoView();
      }, 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (!this.props.isActive) {
        return;
      }
      this._dashboard.scrollIntoView({ behavior: 'smooth' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var dashboardId = (0, _kebabCase2.default)(this.props.name);

      return _react2.default.createElement(
        'div',
        {
          id: dashboardId,
          ref: function ref(c) {
            return _this2._dashboard = c;
          },
          className: (0, _classnames2.default)(_styles2.default.Dashboard, _defineProperty({}, _styles2.default['is-active'], this.props.isActive))
        },
        this.props.children
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

Dashboard.propTypes = {
  name: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.array.isRequired,
  isActive: _react.PropTypes.bool
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    isActive: ownProps.name === state.dashboardReducer.activeDashboard
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Dashboard);