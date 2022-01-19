import React, { Component } from 'react';
import CartButton from '../components/CartButton';

class Home extends Component {
  render() {
    return (
      <div>
        <input type="text" id="pesquisa" name="pesquisa" />
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <CartButton />
      </div>
    );
  }
}

export default Home;
