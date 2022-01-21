import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProducts extends Component {
  render() {
    const { productName, productImage, productPrice, productId } = this.props;
    return (
      <Link
        to={ `/productPage/${productId}` }
        data-testid="product-detail-link"
      >
        <div
          data-testid="product"
          id={ productId }
          className="product"
        >
          <h4>{ productName }</h4>
          <img
            src={ productImage }
            alt={ productName }
            className="imgProduct"
          />
          <br />
          <span>{ productPrice }</span>
          <br />
          {/* <Link to="/cart" data-testid="product-add-to-cart">
            <span>carrinho</span>
          </Link> */}
        </div>
      </Link>
    );
  }
}

CardProducts.propTypes = {
  productName: PropTypes.string,
  productImage: PropTypes.string,
  productPrice: PropTypes.string,
  productId: PropTypes.string,
}.isRequired;

export default CardProducts;
