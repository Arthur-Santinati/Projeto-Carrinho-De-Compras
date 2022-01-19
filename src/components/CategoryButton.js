import React, { Component } from 'react';
import propTypes from 'prop-types';

class CategoryButton extends Component {
  // handleClick = () => {
  // }

  render() {
    const { categoryName } = this.props;
    return (
      <button
        type="button"
        data-testid="category"
        className="category"
        // onClick={ this.handleClick }
      >
        {categoryName}
      </button>
    );
  }
}
CategoryButton.propTypes = {
  categoryId: propTypes.string,
  categoryName: propTypes.string,
}.isRequired;
export default CategoryButton;
