import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/pokeball.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'


export const Navbar = () => {



  
  return ( 
    <div className='navbox'>
      <div className='leftside'>
        <img src={logo} alt=" " />
      </div>
      <div className='rightside'>
        <Link to='Signup'className='navlinks'>Sign up</Link>
        <Link to='/cartproducts'><AiOutlineShoppingCart/></Link>
        <Link to='login' className='navlinks'>Login</Link>

      </div>
    </div>
  
  )
}