import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Home } from './components/Home.jsx'
import { ProductsContextProvider } from './global/ProductsContext';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { CartContextProvider } from './global/CartContext';
import { Cart } from './components/Cart';

export class App extends Component{
  render() {
    return (
      <ProductsContextProvider>
        <CartContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path= '/cartproducts' element={() => <Cart/>} />
        </Routes>
      </Router>
      </CartContextProvider>
      </ProductsContextProvider>
    );
  }
}

export default App;