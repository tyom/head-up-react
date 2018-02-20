import { connect } from 'react-redux';

import { activateCell, activateCellSettings } from '../actions';
import Cell from '../components/Cell';

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.title === state.headup.activeCell,
  isConfiguring: ownProps.title === state.headup.activeCellSettings,
  widget: state.widgets.find(w => w.key === ownProps.widgetId),
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => dispatch(activateCell(ownProps.title)),
    onSettingsClick: title => dispatch(activateCellSettings(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
