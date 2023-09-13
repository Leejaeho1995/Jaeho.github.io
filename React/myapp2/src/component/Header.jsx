import React from 'react'
import Nav from './Nav'
import { mystyle } from './style'
const Header = () => {
  return (
    <div style={mystyle}>
        <div style={
            {fontSize:"25px",
            fontWeight:700,
            color:"#6f5ad3",
            lineHeight:"80px"
            }}>HEADER LOGO</div>

    <Nav />
        </div>
  )
}

export default Header