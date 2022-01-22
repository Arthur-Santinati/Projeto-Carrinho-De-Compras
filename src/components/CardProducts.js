import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCartButton from './AddCartButton';

class CardProducts extends Component {
  render() {
    const { productName, productImage, productPrice, productId } = this.props;
    return (
      <div>
        <Link
          to={ `/productPage/${productId}` }
          data-testid="product-detail-link"
        >
          <div
            data-testid="product"
            className="product"
          >
            <h4>{productName}</h4>
            <img
              src={ productImage }
              alt={ productName }
              className="imgProduct"
            />
            <br />
            <span>{productPrice}</span>
            <br />
          </div>
        </Link>
        <AddCartButton
          productName={ productName }
          productPrice={ Number(productPrice) }
          productId="product-add-to-cart"
        />
      </div>
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
