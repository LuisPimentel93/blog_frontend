import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to='/' className='logo'>CodeBook Blog</Link> 
        <nav>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>  
        </nav> 
  </header>
  )
}

export default Header