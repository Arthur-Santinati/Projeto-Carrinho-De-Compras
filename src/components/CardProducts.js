import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProducts extends Component {
  render() {
    const { productName, productImage, productPrice, productId, addCart } = this.props;
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
        <button
          data-testid="product-add-to-cart"
          type="button"
          id="adicionaCarrinho"
          name={ productName }
          onClick={ () => addCart(productName, productPrice) }
        >
          Adicionar o carrinho
        </button>
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
