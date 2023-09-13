import React from 'react'
import { navStyle, navStyle2 } from './style'


const Nav = () => {
  return (
    <nav>
        <a href="#" style={navStyle}>Home</a>
        <a href="#" style={navStyle}>About</a>
        <a href="#" style={navStyle}>Services</a>
        <a href="#" style={navStyle}>Clients</a>
        <a href="#" style={navStyle2}>Contact</a>
    </nav>
  )
}

export default Nav