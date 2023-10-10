import React from 'react'

const Header = ({isLight}) => {
  return (
    <div style={{
        padding:"10px",
        textAlign:"center",
        fontSize:"20px",
        fontWeight:"bold",
        backgroundColor: isLight? "#ededed" : "#333",
        color: isLight? "#000" : "#fff",
        borderBottom:"1px solid #333"
    }}>Header</div>
  )
}

export default Header