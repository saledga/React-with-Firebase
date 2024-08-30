import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
        <a href="a" className='logo'><h1>Shop</h1></a>   
        <ul className='menu'>
            <li><a className='menu-link' href='a'>Inicio</a></li>
            <li><a className='menu-link' href='a'>Nosotros</a></li>
            <li><a className='menu-link' href='q'>Productos</a></li>
            <li><a className='menu-link' href='b'>Contacto</a></li>  
        </ul>   
    </nav>
  )
}

export default Navbar