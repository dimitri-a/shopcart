import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList></ProductList>
        <Cart></Cart>
      </div>
    );
  }
}

export default App;
