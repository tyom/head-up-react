import React from 'react';

import Menu from './components/menu';

class App extends React.Component {
  render() {
    const menuItems = this.props.children.map(dashboard => dashboard.props.name);

    return(
      <div className="AppContainer">
        <Menu items={menuItems}/>
        <div className="Dashboards">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
