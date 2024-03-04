import salads from '../data/salads.json';
import MenuItem from './MenuItem/MenuItem';

export const App = () => {
  return (
    <div>
      <MenuItemList salads={salads} />
    </div>
  );
};

export const MenuItemList = ({ salads }) => {
  const userLoggedIn = true;

  return (
    <div>
      {userLoggedIn ? ( //conditional rendering
        salads.map(({ name, description, imageUrl, price }) => (
          <MenuItem
            key={name}
            name={name}
            description={description}
            imageUrl={imageUrl}
            price={price}
          />
        ))
      ) : (
        //ternary operator
        <p>
          User needs to Login first before being able to access the menu Items
        </p>
      )}
    </div>
  );
};
