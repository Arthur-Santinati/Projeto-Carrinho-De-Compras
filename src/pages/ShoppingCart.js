import React, { Component } from 'react';
import { Redirect } from 'react-router';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const sum = JSON.parse(localStorage.getItem('soma'));
    super();
    this.state = {
      carrinho: cart,
      soma: sum,
      shouldRedirect: false,
    };
  }
  
  handleClick = () => {
    this.setState({
      shouldRedirect: true,
    });
  }

  handleCartIncrease = (name) => {
    let { carrinho, soma } = this.state;
    const item = carrinho.find((o) => o.name === name);
    soma += item.price;
    if (!carrinho.some((o) => o.name === name)) {
      carrinho = [...carrinho, { name, price: item.price, cont: 1 }];
    } else {
      carrinho.find((o) => o.name === name).cont += 1;
    }
    this.setState({
      carrinho,
      soma,
    });
    localStorage.setItem('cart', JSON.stringify(carrinho));
    localStorage.setItem('soma', JSON.stringify(soma));
  }

  handleCartDecrease = (name) => {
    let { soma } = this.state;
    const { carrinho } = this.state;
    const item = carrinho.find((o) => o.name === name);
    const index = carrinho.findIndex((o) => o.name === name);
    if (item.cont > 1) {
      soma -= item.price;
      item.cont -= 1;
      carrinho[index] = item;
      this.setState({
        carrinho,
        soma,
      });
      localStorage.setItem('cart', JSON.stringify(carrinho));
      localStorage.setItem('soma', JSON.stringify(soma));
    }
  }

  handleDeleteItem = (name) => {
    let { soma } = this.state;
    const { carrinho } = this.state;
    const item = carrinho.find((o) => o.name === name);
    const index = carrinho.findIndex((o) => o.name === name);
    soma -= (item.price * item.cont);
    carrinho.splice(index, 1);
    this.setState({
      carrinho,
      soma,
    });
    localStorage.setItem('cart', JSON.stringify(carrinho));
    localStorage.setItem('soma', JSON.stringify(soma));
  }

  render() {
    const { carrinho, soma, shouldRedirect } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/checkout" />;
    };
    
    return (
      <div>
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
        {carrinho ? carrinho.map((cartItem, index) => (
          <div key={ index }>
            <CartItem
              productName={ cartItem.name }
              productPrice={ cartItem.price }
            />
            <span data-testid="shopping-cart-product-quantity">
              Quant:
              {cartItem.cont}
            </span>
            <br />
            <button
              id="increaseButton"
              type="button"
              onClick={ () => this.handleCartIncrease(cartItem.name) }
              data-testid="product-increase-quantity"
            >
              <span>➕</span>
            </button>
            <button
              id="decreaseButton"
              type="button"
              onClick={ () => this.handleCartDecrease(cartItem.name) }
              data-testid="product-decrease-quantity"
            >
              <span>➖</span>
            </button>
            <button
              id="deleteButton"
              type="button"
              onClick={ () => this.handleDeleteItem(cartItem.name) }
            >
              <span>❌</span>
            </button>
          </div>
        )) : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
        <br />
        <p>Valor total da compra:</p>
        <span>
          {soma}
        </span>
      </div>
    );
  }
}

export default ShoppingCart;
