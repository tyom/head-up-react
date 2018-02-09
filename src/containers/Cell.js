import { connect } from 'react-redux';

import { activateCell, activateCellSettings } from '../actions';
import Cell from '../components/Cell';
import styles from '../components/Cell/style.css';

const mapStateToProps = (state, ownProps) => ({
  isActive: ownProps.title === state.headup.activeCell,
  isConfiguring: ownProps.title === state.headup.activeCellSettings,
});

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: evt => {
      const isButton = !!evt.target.closest(`.${styles['menuBtn']}`);
      if (isButton) {
        return;
      }
      dispatch(activateCell(ownProps.title));
    },
    onSettingsClick: title => dispatch(activateCellSettings(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
