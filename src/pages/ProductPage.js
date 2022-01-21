import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import AddCartButton from '../components/AddCartButton';
import AvaliationForm from '../components/AvaliationForm';
import { getProductApi } from '../services/api';
import CartButton from '../components/CartButton';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      price: '',
      attributes: [],
    };
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    const id = pathname.split('/');
    getProductApi(id[2]).then((info) => {
      this.setState({
        name: info.title,
        image: info.thumbnail,
        price: info.price,
        attributes: [...info.attributes],
      });
    });
  }

  render() {
    const { name, image, price, attributes } = this.state;
    const { location: { pathname } } = this.props;
    const id = pathname.split('/')[2];
    console.log(id);
    return (
      <div>
        <h1 data-testid="product-detail-name">
          {name}
        </h1>
        <span>
          Preço:
          {' '}
          {price}
        </span>
        <img src={ image } alt={ name } />
        <ul>
          {attributes.map((atributo) => (
            <li key={ atributo.name }>
              {atributo.name}
              {' '}
              :
              {' '}
              {atributo.value_name}
            </li>))}
        </ul>
        <Link to="/">Voltar para Home</Link>
        <br />
        <br />
        <AddCartButton
          productName={ name }
          productPrice={ Number(price) }
          productId="product-detail-add-to-cart"
        />
        <br />
        <br />
        <CartButton />
        <AvaliationForm
          id={ id }
        />
      </div>
    );
  }
}
ProductPage.propTypes = {
  pdName: propTypes.string,
  pdImg: propTypes.string,
  pd: propTypes.string,
}.isRequired;

export default ProductPage;
