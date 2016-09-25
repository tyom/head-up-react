import React, {PropTypes} from 'react';

import Menu from '../menu';

import styles from './styles.css';

class Dashboards extends React.Component {
  render() {
    const menuItems = this.props.children.map(dashboard => dashboard.props.name);

    return (
      <div className={styles.Dashboards}>
        <Menu items={menuItems}/>
        <div className={styles['Dashboards-collection']}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Dashboards.propTypes = {
  children: PropTypes.array.isRequired
};

export default Dashboards;
