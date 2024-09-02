import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Shop</h1></Link>   
        <ul className='menu'>
            <li><Link className='menu-link' to="/">Inicio</Link></li>
            <li><Link className='menu-link' to="/nosotros">Nosotros</Link></li>
            <li><Link className='menu-link' to="">Productos</Link></li>
            <li><Link className='menu-link' to="a">Contacto</Link></li>  
        </ul>   
    </nav>
  )
}

export default Navbar