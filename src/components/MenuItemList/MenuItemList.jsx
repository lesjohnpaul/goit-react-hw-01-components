import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'components/MenuiItem/MenuItem';
import styles from './MenuItemList.module.css';

class MenuItemList extends React.Component {
  render() {
    const { shoes } = this.props;
    const userLoggedIn = true;
    return (
      <div className={styles.menuItemListContainer}>
        {userLoggedIn ? (
          shoes.map(({ name, description, imageUrl, price, availability }) => (
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
            user needs to login first before being able to access the menu
            items.
          </p>
        )}
      </div>
    );
  }
}

MenuItemList.propTypes = {
  shoes: PropTypes.arrayOf(
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
// export const MenuItemList = ({ shoes }) => {
//   const styles = {
//     container: { padding: '20px' },
//     loginMessage: { fontSize: '18px', color: 'red', fontWeight: 'bold' },
//   };

//   const userLoggedIn = true;
//   return (
//     <div style={styles.container}>
//       {userLoggedIn ? (
//         shoes.map(({ name, description, imageUrl, price, availability }) => (
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
//   shoes: PropTypes.arrayOf(
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
