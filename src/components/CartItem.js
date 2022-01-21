import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { productName, productPrice } = this.props;
    return (
      <div>
        <div>
          <h4 data-testid="shopping-cart-product-name">{productName}</h4>
          <br />
          <span>{productPrice}</span>
          <br />
        </div>
      </div>
    );
  }
}

CardItem.propTypes = {
  productName: PropTypes.string,
  productPrice: PropTypes.string,
}.isRequired;

export default CardItem;
