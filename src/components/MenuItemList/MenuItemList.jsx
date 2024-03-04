import MenuItem from 'components/MenuItem/MenuItem';

export const MenuItemList = ({ salads }) => {
  return (
    <div>
      {salads.map(({ name, description, imageUrl, price }) => (
        <MenuItem
          key={salads.name}
          name={salads.name}
          description={salads.description}
          imageUrl={salads.imageUrl}
          price={salads.price.individual}
        />
      ))}
    </div>
  );
};
export default MenuItemList;
