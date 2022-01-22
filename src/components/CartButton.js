import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class CartButton extends Component {
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

    const retorno = shouldRedirect ? <Redirect to="/cart" />
      : (
        <div>
          <button
            className="elementList"
            type="button"
            data-testid="shopping-cart-button"
            id="shopping-cart-button"
            onClick={ this.handleClick }
          >
            <span>🛒</span>
          </button>
        </div>);
    return retorno;
  }
}

export default CartButton;
