import React, { useState } from 'react'

const Footer = ( {isLight, setisLight }) => {
    console.log(isLight);

  return (
    <div style={{
        padding:"10px 15px",
        textAlign:"right",
        fontSize:"20px",
        fontWeight:"bold",
        backgroundColor: isLight? "#ededed" : "#333",
        color: isLight? "#000" : "#fff",
        borderTop:"1px solid #333"

    }}>
        <button style={{backgroundColor:"#fff"}} onClick={()=> setisLight(!isLight)}>밝기 변경</button>
    </div>
  )
}

export default Footer