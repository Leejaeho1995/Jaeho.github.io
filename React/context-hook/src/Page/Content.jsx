import React from 'react'

const Content = ({isLight}) => {
  return (
    <div style={{
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"25px",
        backgroundColor: isLight? "#fff" : "#999",
        color: isLight? "green" : "yellow"
    }}>Content</div>
  )
}

export default Content