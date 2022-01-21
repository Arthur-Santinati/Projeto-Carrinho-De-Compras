import React, { Component } from 'react';
import '../styles/erro.css';
import propTypes from 'prop-types';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phoneNumber: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      state: '',
      firstSubmit: false,
      // payment: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value, id } = target;
    console.log(id);
    this.setState({
      [name]: value,
    });
  }

  onBuyClick = (event) => {
    event.preventDefault();
    this.formValidation();
  }

  formValidation = () => {
    const {
      fullName,
      email,
      cpf,
      phoneNumber,
      cep,
      address,
      complement,
      number,
      city,
      state,
      // payment,
    } = this.state;
    const { history } = this.props;
    this.setState({
      firstSubmit: true,
    });

    if (
      fullName === ''
      || email === ''
      || cpf === ''
      || phoneNumber === ''
      || cep === ''
      || address === ''
      || complement === ''
      || number === ''
      || city === ''
      || state === ''
    ) {
      const alert = 'Preencha todos os campos';
      alert(alert);
    } else {
      this.setState({
        fullName: '',
        email: '',
        cpf: '',
        phoneNumber: '',
        cep: '',
        address: '',
        complement: '',
        number: '',
        city: '',
        state: '',
      });
      history.push('/');
    }
  }

  render() {
    const estados = [
      '',
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO'];
    const { fullName,
      email,
      cpf,
      phoneNumber,
      cep,
      address,
      complement,
      number,
      city,
      firstSubmit,
    } = this.state;

    return (
      <div className="checkout">
        <section className="checkout-preview">
          <span> Revise seus produtos </span>
          <ul>
            {/* Lista de produtos aqui */}
          </ul>
          {/* <span>{ Valor total dos produtos aqui }</span> */}
        </section>
        <section className="checkout-form">
          <form>
            <span>Informações do comprador</span>
            <input
              type="text"
              id="name-field"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              className={ !fullName && firstSubmit ? 'error' : '' }
              // style={ { border: !fullName && firstSubmit ? '2px solid red' : '1px solid black' } } dica do Luanderson
              value={ fullName }
              name="fullName"
              required
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-email"
              placeholder="Email"
              className={ !email && firstSubmit ? 'error' : '' }
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              className={ !cpf && firstSubmit ? 'error' : '' }
              value={ cpf }
              name="cpf"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              className={ !phoneNumber && firstSubmit ? 'error' : '' }
              value={ phoneNumber }
              name="phoneNumber"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              className={ !cep && firstSubmit ? 'error' : '' }
              value={ cep }
              name="cep"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              className={ !address && firstSubmit ? 'error' : '' }
              value={ address }
              name="address"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              placeholder="Complemento"
              className={ !complement && firstSubmit ? 'error' : '' }
              value={ complement }
              name="complement"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              placeholder="Número"
              // className={ !number && firstSubmit ? 'error' : '' }
              value={ number }
              name="number"
              onChange={ this.handleChange }
            />
            <input
              type="text"
              placeholder="Cidade"
              // className={ !city && firstSubmit ? 'error' : '' }
              value={ city }
              name="city"
              onChange={ this.handleChange }
            />
            <select name="state" onChange={ this.handleChange }>
              {estados.map((estado) => (
                <option value={ estado } key={ estado }>
                  { estado }
                </option>))}
            </select>
          </form>
        </section>
        <button
          type="submit"
          id="buy-button"
          onClick={ this.onBuyClick }
        >
          Comprar
        </button>
      </div>
    );
  }
}

Checkout.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default Checkout;
