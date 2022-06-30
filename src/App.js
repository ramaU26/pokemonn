import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddProducts } from './components/AddProducts';
import { Home } from './components/Home.jsx'
import { ProductsContextProvider } from './global/ProductsContext';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login';

export class App extends Component{
  render() {
    return (
      <ProductsContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addproducts' element={<AddProducts />} />
          <Route path='/signup' Component={<Signup/>} />
          <Route path='/login' Component={<Login/>} />
        </Routes>
      </Router>
      </ProductsContextProvider>
    );
  }
}

export default App;