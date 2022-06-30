import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/pokeball.png'


export const Navbar = () => {
  return ( 
    <div className='navbox'>
      <div className='leftside'>
        <img src={logo} alt=" " />
      </div>
      <div className='rightside'>
        <Link to='/signup'className='navlinks'>Sign up</Link>
        <Link to='/login' className='navlinks'>Login</Link>
      </div>
    </div>
  
  )
}
