import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryButton from '../components/CategoryButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProducts from '../components/CardProducts';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      productList: [],
      filterText: '',
      selectedCategoryId: '',
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  componentDidMount() {
    getCategories().then((info) => {
      this.setState({
        categoryList: [...info],
      });
    });
  }

  handleChangeCategory({ target }) {
    const { id } = target;
    this.carregaElementos(id);
    this.setState({
      selectedCategoryId: id,
    });
  }

  handleChangeInput({ target }) {
    const { value } = target;
    this.setState({
      filterText: value,
    });
  }

  carregaElementos(id, produto) {
    getProductsFromCategoryAndQuery(id, produto)
      .then((info) => {
        this.setState({
          productList: [...info.results],
        });
      });
  }

  render() {
    const message = (
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>);
    const { categoryList, productList, filterText, selectedCategoryId } = this.state;
    return (
      <div>
        <section className="products-section">
          <input
            data-testid="query-input"
            type="text"
            id="pesquisa"
            name="filterText"
            value={ filterText }
            onChange={ this.handleChangeInput }
          />
          <button
            type="button"
            data-testid="query-button"
            id="query-button"
            onClick={ () => this.carregaElementos(selectedCategoryId, filterText) }
          >
            Pesquisar
          </button>
          { productList.length > 0 ? productList.map((products) => (
            <CardProducts
              key={ products.id }
              productName={ products.title }
              productImage={ products.thumbnail }
              productPrice={ products.price }
              productId={ products.id }
            />
          )) : message }
        </section>
        <aside className="navBar">
          <CartButton />
          { categoryList.map((category) => (
            <CategoryButton
              categoryName={ category.name }
              categoryId={ category.id }
              key={ category.id }
              clicou={ this.handleChangeCategory }
            />
          ))}
        </aside>
      </div>
    );
  }
}

export default Home;
