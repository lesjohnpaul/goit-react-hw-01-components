import PropTypes from 'prop-types';
import MenuItem from 'components/MenuItem/MenuItem';
import './MenuItemList.css';

export const MenuItemList = ({ salads }) => {
  const userLoggedIn = true;
  return (
    <div className="menuItemListContainer">
      {userLoggedIn ? (
        salads.map(({ name, description, imageUrl, price, availability }) => (
          <MenuItem
            key={name}
            name={name}
            description={description}
            imageUrl={imageUrl}
            price={price}
            availability={availability}
          />
        ))
      ) : (
        <p>
          user needs to login first before being able to access the menu items.
        </p>
      )}
    </div>
  );
};

MenuItemList.propTypes = {
  salads: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      price: PropTypes.shape({
        individual: PropTypes.number.isRequired,
      }).isRequired,
      availability: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuItemList;

//================================INLINE CSS APPROACH======================
// export const MenuItemList = ({ salads }) => {
//   const styles = {
//     container: { padding: '20px' },
//     loginMessage: { fontSize: '18px', color: 'red', fontWeight: 'bold' },
//   };

//   const userLoggedIn = true;
//   return (
//     <div style={styles.container}>
//       {userLoggedIn ? (
//         salads.map(({ name, description, imageUrl, price, availability }) => (
//           <MenuItem
//             key={name}
//             name={name}
//             description={description}
//             imageUrl={imageUrl}
//             price={price}
//             availability={availability}
//           />
//         ))
//       ) : (
//         <p style={styles.loginMessage}>
//           user needs to login first before being able to access the menu items.
//         </p>
//       )}
//     </div>
//   );
// };

// MenuItemList.propTypes = {
//   salads: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       imageUrl: PropTypes.string.isRequired,
//       price: PropTypes.shape({
//         individual: PropTypes.number.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
// };

// export default MenuItemList;
