import React, { Component } from 'react';
import CartButton from '../components/CartButton';
import CategoryButton from '../components/CategoryButton';
import { getCategories } from '../services/api';

// const x = await getCategories();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    getCategories().then((info) => {
      this.setState({
        categoryList: [...info],
      });
    });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div>
        <section>
          <input type="text" id="pesquisa" name="pesquisa" />
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
          <CartButton />
        </section>
        <nav>
          { categoryList.map((category) => (
            <CategoryButton
              categoryName={ category.name }
              categoryId={ category.id }
              key={ category.id }
            />
          ))}
        </nav>
      </div>
    );
  }
}

export default Home;
