import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Menu from '../../components/menu';
import {activateDashboard} from '../../actions';
import {toggleMenu} from '../../actions';
import styles from './styles.css';


class HeadUp extends React.Component {
  renderMenu() {
    const menuItems = this.props.children.map(dashboard => dashboard.props.name);
    if (!menuItems.length) {return null;}
    return (
      <Menu
        items={menuItems}
        activeDashboard={this.props.activeDashboard}
        isMenuClosed={this.props.isMenuClosed}
        onToggleMenu={this.props.onToggleMenu}
        onSelectMenuItem={this.props.onSelectMenuItem}
      />
    );
  }

  render() {
    return (
      <div className={styles.HeadUp}>
        {this.renderMenu()}
        <div className={styles['HeadUp-collection']}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

HeadUp.propTypes = {
  children: PropTypes.array.isRequired,
  activeDashboard: PropTypes.string,
  isMenuClosed: PropTypes.bool,
  onToggleMenu: PropTypes.func,
  onSelectMenuItem: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
  cells: ownProps.children,
  activeDashboard: state.headup.activeDashboard,
  isMenuClosed: state.headup.isMenuClosed
});

const mapDispatchToProps = (dispatch) => ({
  onToggleMenu: () => dispatch(toggleMenu()),
  onSelectMenuItem: name => dispatch(activateDashboard(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadUp);
