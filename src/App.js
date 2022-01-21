import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
          exact
          path="/cart"
          component={ ShoppingCart }
        />
        <Route
          exact
          path="/checkout"
          component={ Checkout }
        />
      </Switch>
    </BrowserRouter>);
}

export default App;
