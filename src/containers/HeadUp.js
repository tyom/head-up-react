import { connect } from 'react-redux';

import { activateSpace, toggleMenu, addSpace } from '../actions';
import HeadUp from '../components/HeadUp';

const mapStateToProps = state => ({
  spaces: state.spaces,
  activeSpace: state.headup.activeSpace,
  isMenuClosed: state.headup.isMenuClosed,
});

export const mapDispatchToProps = dispatch => ({
  onToggleMenu: () => dispatch(toggleMenu()),
  onSelectMenuItem: name => dispatch(activateSpace(name)),
  onPrevSpace: name => dispatch(activateSpace(name)),
  onNextSpace: name => dispatch(activateSpace(name)),
  onAddSpace: space => dispatch(addSpace(space)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadUp);
