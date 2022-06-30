import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Home } from './components/Home.jsx'
import { ProductsContextProvider } from './global/ProductsContext';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

export class App extends Component{
  render() {
    return (
      <ProductsContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
      </ProductsContextProvider>
    );
  }
}

export default App;