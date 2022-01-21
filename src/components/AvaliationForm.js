import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AvaliationForm extends Component {
  constructor() {
    super();
    const commentsL = JSON.parse(localStorage.getItem('evaluations'));
    this.state = {
      email: '',
      rate: 0,
      comments: '',
      commentsList: commentsL,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  saveItensFromLocalStorage = (event, id) => {
    event.preventDefault();
    console.log(id);
    const { rate, email, comments } = this.state;
    let { commentsList } = this.state;
    if (commentsList && commentsList[id]) {
      commentsList[id] = [...commentsList[id], { email, rate, comments }];
    } else {
      commentsList = { [id]: [{ email, rate, comments }] };
    }
    this.setState({
      commentsList,
      email: '',
      rate: 0,
      comments: '',
    });
    localStorage.setItem('evaluations', JSON.stringify(commentsList));
  }

  // getItensFromLocalStorage = (id) => {
  //   const getAvaliacoes = JSON.parse(localStorage.getItem('evaluations'));
  //   const avaliacoes = getAvaliacoes.filter((result) = result.id === id);
  //   console.log(avaliacoes);
  // }

  render() {
    const { email, comments, commentsList } = this.state;
    const { id } = this.props;
    return (
      <div>
        <h1>Avaliações</h1>
        <form onSubmit={ this.saveItensFromLocalStorage }>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              onChange={ this.handleChange }
              required
              placeholder="Email"
              data-testid="product-detail-email"
              value={ email }
            />
          </label>
          <label htmlFor="1">
            ⭐(1)
            <input
              id="1"
              name="rate"
              data-testid="1-rating"
              type="radio"
              onChange={ this.handleChange }
              value="1"
            />
          </label>
          <label htmlFor="2">
            ⭐
            <input
              id="2"
              name="rate"
              data-testid="2-rating"
              type="radio"
              onChange={ this.handleChange }
              value="2"
            />
          </label>
          <label htmlFor="3">
            ⭐
            <input
              id="3"
              name="rate"
              data-testid="3-rating"
              type="radio"
              onChange={ this.handleChange }
              value="3"
            />
          </label>
          <label htmlFor="4">
            ⭐
            <input
              id="4"
              name="rate"
              data-testid="4-rating"
              type="radio"
              onChange={ this.handleChange }
              value="4"
            />
          </label>
          <label htmlFor="5">
            ⭐(5)
            <input
              id="5"
              name="rate"
              data-testid="5-rating"
              type="radio"
              onChange={ this.handleChange }
              value="5"
            />
          </label>
          <br />
          <br />
          <textarea
            placeholder="Mensagem(opcional)"
            data-testid="product-detail-evaluation"
            id="comments"
            name="comments"
            onChange={ this.handleChange }
            value={ comments }
          />
          <br />
          <br />

          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ (e) => this.saveItensFromLocalStorage(e, id) }
          >
            Avaliar
          </button>
        </form>
        { commentsList && commentsList[id]
            && commentsList[id].map((comment, index) => (
              <div key={ index }>
                <span>{ comment.email }</span>
                <span>{ comment.rate }</span>
                {comment.comments && <p>{ comment.comments }</p>}
              </div>
            ))}
      </div>
    );
  }
}

AvaliationForm.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default AvaliationForm;
