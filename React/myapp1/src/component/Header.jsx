import React from 'react'

const Header = () => {
  const styles ={
    borderBottom:"1px solid #333",
    fontWeight:"bold"
  }
  return (
    <>
        <div style={styles}>

      <div className='headtxt1'>ConceptM4
      <div className='headtxt2'>
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Clients</li>
        </ul>
        <button className='btn-head'>Contact</button>
         </div>
         
          </div>
      
      
      </div>

</>
  )
}

export default Header