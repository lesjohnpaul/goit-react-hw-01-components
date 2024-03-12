import React from 'react';
import MenuItemList from './MenuItemList/MenuItemList';
import Menu from './Menu/Menu';
import OrderCounter from './OrderCounter/OrderCounter';
import salads from '../data/salads.json';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu title="Salads Menu">
          <MenuItemList salads={salads} />
        </Menu>
        <OrderCounter salads={salads} />
      </div>
    );
  }
}

export default App;

//1. Props can only be passed from parent to child
//2. Props make data available from parent to child component without needing to import the data per file
//meaning we just need to import it in the parent and props take care of passing it down to its children
