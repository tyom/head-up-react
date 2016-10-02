import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import Menu from '../menu';

import styles from './styles.css';


class HeadUp extends React.Component {
  render() {
    if (!this.props.children) {return;}
    const menuItems = this.props.children.map(dashboard => dashboard.props.name);

    return (
      <div className={styles.HeadUp}>
        <Menu items={menuItems}/>
        <div className={styles['HeadUp-collection']}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

HeadUp.propTypes = {
  children: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  cells: ownProps.children
});

export default connect(mapStateToProps)(HeadUp);