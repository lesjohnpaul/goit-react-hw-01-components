import MenuItemList from './MenuItemList/MenuItemList';
import salads from '../data/salads.json';

export const App = () => {
  return (
    <div>
      <MenuItemList salads={salads} />
    </div>
  );
};
//1. Props can only be passed from parent to child
//2. Props make data available from parent to child component without needing to import the data per file
//meaning we just need to import it in the parent and props take care of passing it down to its children
