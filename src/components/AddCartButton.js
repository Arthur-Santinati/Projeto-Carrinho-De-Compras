import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddCartButton extends Component {
  handleAddCart = (name, price) => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let soma = JSON.parse(localStorage.getItem('soma'));
    if (cart && !cart.some((o) => o.name === name)) {
      cart = [...cart, { name, price, cont: 1 }];
    } else if (!cart) {
      cart = [{ name, price, cont: 1 }];
    } else {
      cart.find((o) => o.name === name).cont += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    const sum = soma ? soma += price : price;
    localStorage.setItem('soma', JSON.stringify(sum));
  }

  render() {
    const { productName, productPrice, productId } = this.props;

    return (
      <button
        data-testid={ productId }
        type="button"
        id="adicionaCarrinho"
        name={ productName }
        onClick={ () => this.handleAddCart(productName, productPrice) }
      >
        <span>➕</span>
      </button>
    );
  }
}

AddCartButton.propTypes = {
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
};

export default AddCartButton;
