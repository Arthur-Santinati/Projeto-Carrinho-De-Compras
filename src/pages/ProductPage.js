import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import CartButton from '../components/CartButton';
import { getProductApi } from '../services/api';

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
        <CartButton />
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
