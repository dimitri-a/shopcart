import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import ProductListContainer from './containers/ProductListContainer';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductListContainer></ProductListContainer>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
