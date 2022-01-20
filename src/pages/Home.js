import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryButton from '../components/CategoryButton';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CardProducts from '../components/CardProducts';

// const x = await getCategories();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
      productList: [],
      idCategory: '',
      // product: '',
    };
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  componentDidMount() {
    getCategories().then((info) => {
      this.setState({
        categoryList: [...info],
      });
    });
  }

  componentWillUnmount() {
    const { idCategory } = this.state;
    console.log(idCategory);
    getProductsFromCategoryAndQuery(idCategory)
      .then((info) => {
        console.log(info);
        this.setState({
          productList: [...info],
        });
      });
  }

  handleChangeCategory(event) {
    const { target } = event;
    const { id } = target;
    this.setState({
      idCategory: id,
    });
    this.componentWillUnmount();
  }

  render() {
    const message = (
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>);
    const { categoryList, productList } = this.state;
    return (
      <div>
        <section>
          <input type="text" id="pesquisa" name="pesquisa" />
          { productList ? productList.map((products) => (
            <CardProducts
              key={ products.id }
              productName={ products.title }
              productImage={ products.thumbnail }
              productPrice={ products.price }
            />
          )) : message }
          <CartButton />
        </section>
        <aside className="navBar">
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
