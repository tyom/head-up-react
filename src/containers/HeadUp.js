import { connect } from 'react-redux';

import { activateDashboard, toggleMenu } from '../actions';
import HeadUp from '../components/HeadUp';

const mapStateToProps = (state, ownProps) => ({
  cells: ownProps.children,
  activeDashboard: state.headup.activeDashboard,
  isMenuClosed: state.headup.isMenuClosed,
});

const mapDispatchToProps = dispatch => ({
  onToggleMenu: () => dispatch(toggleMenu()),
  onSelectMenuItem: name => dispatch(activateDashboard(name)),
  onPrevDashboard: name => dispatch(activateDashboard(name)),
  onNextDashboard: name => dispatch(activateDashboard(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadUp);
