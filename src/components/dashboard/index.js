import React, {PropTypes} from 'react';
import kebabCase from 'lodash/kebabCase';

import Cell from '../cell';

import {dashboard} from './styles.css';

const Dashboard = ({name, children}) => (
  <div className={dashboard} id={kebabCase(name)}>
    {children}
  </div>
);

Dashboard.PropTypes = {
  displayName: 'Dashboard'
};

export default Dashboard;
