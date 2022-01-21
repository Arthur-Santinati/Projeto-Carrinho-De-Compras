import React, { Component } from 'react';
import { Redirect } from 'react-router';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
    };
  }

  handleClick = () => {
    this.setState({
      shouldRedirect: true,
    });
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/checkout" />;
    }
    return (
      <div className="shopping-cart">
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.handleClick }
        >
          Finalizar Compra
        </button>
      </div>

    );
  }
}

export default ShoppingCart;
