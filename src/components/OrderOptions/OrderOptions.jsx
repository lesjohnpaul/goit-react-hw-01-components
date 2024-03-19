import React, { Component } from 'react';
import styles from './OrderOptions.module.css';
import PropTypes from 'prop-types';

class OrderOptions extends Component {
  static propTypes = {
    onOrder: PropTypes.func.isRequired,
    shoes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  render() {
    const { onOrder, shoes } = this.props;
    return (
      <div className={styles.optionsContainer}>
        {shoes.map(salad => (
          <button
            key={salad.name}
            onClick={() => onOrder(salad.name)}
            className={styles.orderButton}
          >
            Order {salad.name}
          </button>
        ))}
      </div>
    );
  }
}

export default OrderOptions;
