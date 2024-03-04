import React from "react";

const MenuItem = () => {
  return (
<div style={{marginBottom:'20px'}}>
  <img src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/08/Roasted-Beet-Salad-11.jpg"

  alt="salad"
  style={{height:'400px'}}
  />

    <h2>Green Salad</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Aliquid quod reiciendis, consectetur itaque enim animi provident
      debitis nam quos ducimus odit et architecto das,
      error odio a, iste doloremque!
    </p>
    <span>$5</span>
</div>
  );
};
export default MenuItem;
// import PropTypes from 'prop-types';

// const MenuItem = ({ name, description, imageUrl, price }) => {
//   return (
//     <div style={{ marginBottom: '20px' }}>
//       <img src={imageUrl} alt={name} style={{ height: '400px' }} />
//       <h2>{name}</h2>
//       <p>{description}</p>
//       <p>Price: ${price.toFixed(2)}</p>
//     </div>
//   );
// };

// MenuItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   price: PropTypes.shape({
//     individual: PropTypes.number.isRequired,
//   }).isRequired,
// };

// export default MenuItem;
