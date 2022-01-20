import React, { Component } from 'react';
import propTypes from 'prop-types';

class CategoryButton extends Component {
  // handleClick = () => {
  // }

  render() {
    const { categoryName, categoryId, clicou } = this.props;
    return (
      <label htmlFor={ categoryId } data-testid="category">
        { categoryName }
        <input
          type="radio"
          id={ categoryId }
          name="category"
          value={ categoryName }
          onClick={ clicou }
        />
      </label>
    );
  }
}
CategoryButton.propTypes = {
  categoryId: propTypes.string,
  categoryName: propTypes.string,
}.isRequired;
export default CategoryButton;
