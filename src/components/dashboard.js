import React, {PropTypes} from 'react';

import Cell from './cell';

const Dashboard = () => (
  <div id="dashboard">
    <Cell title="Hello" size="1"/>
    <Cell title="World" size="1"/>
    <Cell title="Foo" size="2:1"/>
    <Cell title="Lorem" size="2"/>
    <Cell title="ipsum" size="2"/>
    <Cell title="Gollum" size="4:1"/>
  </div>
);

Dashboard.PropTypes = {
};

export default Dashboard;