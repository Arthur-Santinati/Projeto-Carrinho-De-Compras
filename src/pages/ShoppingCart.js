import React, { Component } from 'react';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  render() {
    return (
      <div>
        {JSON.parse(localStorage.getItem('cart')).map((cartItem, index) => (
          <CartItem
            key={ index }
            productName={ cartItem.name }
            productPrice={ cartItem.price }
          />))}
        <span data-testid="shopping-cart-product-quantity">
          { JSON.parse(localStorage.getItem('count')) }
        </span>
      </div>
    );
  }
}

export default ShoppingCart;
