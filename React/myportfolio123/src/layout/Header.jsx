import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import {VscClose, VscMenu} from 'react-icons/vsc'


const Header = () => {
  const [isActive, setIsActive] = useState()
  const handleToggle = () =>{
    setIsActive(!isActive);
  }
  return (
    <>
    <header className='fixed-top site_header'>
    <div className="d-flex align-items-center justify-content-between mx-4 my-1">
      <Link to='/' className='navbar-brand nav_ac'>
        <h3>Home</h3>
      </Link>
      <div className="d-flex align-items-center">
        <button className='menu_button nav_ac' onClick={handleToggle}>
          {!isActive ? <VscClose /> : <VscMenu />}
        </button>
      </div>
    </div>
    
    <div className={`${isActive ? "":"menu_open"} site_navigation`}>
      <div className="bg_menu h-100">
        <div className="menu_wrapper">
          <div className="menu_container p-3 text-center">
            <ul className="menu_item">
              <li className='item-list'><Link to='/' onClick={handleToggle} className="item list">Home</Link></li>
              <li className='item-list'><Link to='/About' onClick={handleToggle} className="item list">About</Link></li>
              <li className='item-list'><Link to='/Portfolio' onClick={handleToggle} className="item list">Portfolio</Link></li>
              <li className='item-list'><Link to='/Contact' onClick={handleToggle} className="item list">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </header>

    </>
  )

}

export default Header