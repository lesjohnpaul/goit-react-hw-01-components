import PropTypes from 'prop-types';

const getBgColor = availability => {
  switch (availability) {
    case 'Available':
      return '#C5e8d7';
    case 'Few Left':
      return '#F7e2bc';
    case 'Not Available':
      return '#e8c5c6';
    case 'Seasonal':
      return '#c5d4e8';
    default:
      throw new Error(`Unsupported availability Status - ${availability}`);
  }
};

const MenuItem = ({ name, description, imageUrl, price, availability }) => {
  //inline styles for each element
  const styles = {
    container: {
      marginBottom: '20px',
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      maxWidth: '400px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: getBgColor(availability),
    },
    image: {
      height: '400px',
      width: '100%',
      objectFit: 'cover',
      marginBottom: '10px',
    },
    name: { fontsize: '24px', fontWeight: 'bold', marginBottom: '10px' },
    description: { fontSize: '16px', color: '#666', marginBottom: '10px' },
    price: { fontSize: '16px', color: '#333' },
    priceSmall: { fontSize: '15px', color: '#313' },
  };

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>Price: ${price.individual.toFixed(2)}</p>
      <p style={styles.priceSmall}>Price of Small ${price.Small.toFixed(2)}</p>
      <p>{availability}</p>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.shape({
    //shape is to access the nested object
    individual: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
