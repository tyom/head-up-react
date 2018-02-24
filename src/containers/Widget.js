import { connect } from 'react-redux';

import { activateCell, activateCellSettings } from '../actions';
import Widget from '../components/Widget';

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.id === state.headup.activeCell,
  isConfiguring: ownProps.id === state.headup.activeCellSettings,
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(activateCell(ownProps.id)),
    onSettingsClick: id => dispatch(activateCellSettings(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);
