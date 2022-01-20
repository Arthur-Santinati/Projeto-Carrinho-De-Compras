import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardProducts extends Component {
  render() {
    const { productName, productImage, productPrice } = this.props;
    return (
      <div>
        <h1>{ productName }</h1>
        <img src={ productImage } alt={ productPrice } />
        <span>{ productPrice }</span>
      </div>
    );
  }
}

CardProducts.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  productPrice: PropTypes.string,
}.isRequired;

export default CardProducts;
