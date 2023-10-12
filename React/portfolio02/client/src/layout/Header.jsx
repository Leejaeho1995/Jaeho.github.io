import React, { useState } from 'react'
import { Link } from 'react-router-dom'; // a 태그랑 같음.
import { VscClose,VscMenu } from 'react-icons/vsc'
import { ReactComponent as Logo } from '../assets/images/Logo.svg'
import './style.css'
const Header = () => {
    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
       setIsActive(!isActive);
    }
  return (
    <>
    <header className='fixed-top site__header'>
        <div className="d-flex align-items-center justify-content-between">
    <Link to="/" className='navbar-brand nav_ac'>
        <Logo width="150" height="40" />
    </Link>
             <div className="d-flex align-items-center">
             {/*토글만들것*/}
                <button className='menu__button nav_ac' onClick={handleToggle}>
                     {!isActive ? <VscClose /> : <VscMenu />}
                </button>
         </div>
      </div>
      
        <div className={`${isActive ? "": "menu_opend"} site__navigation`}>
            <div className='bg__menu h-100'>
                <div className='menu_wrapper'>
                    <div className='menu__container p-3'>
                        <ul className='the_menu'>
                            <li className="menu_item">
                                <Link onClick={handleToggle} to='/' className='my-3'>
                                    Home
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link onClick={handleToggle} to='/Portfolio' className='my-3'>
                                    Portfolio
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link onClick={handleToggle} to='/About' className='my-3'>
                                    About
                                </Link>
                            </li>
                            <li className="menu_item">
                                <Link onClick={handleToggle} to='/Contact' className='my-3'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                    {/* ------------------ */}
            <div className="menu__footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-2">
             <div className="d-flex">
                       <a href="#">InstarGram</a>
                       <a href="#">FaceBook</a>
                       <a href="#">GitHub</a>
                       <a href="#">KaKao</a>
             </div>
                 <p className='copyright m-0'> copyright __{}</p>
            </div>
        </div>

    </header>
    <div className='br-top'></div>
    <div className="br-bottom"></div>
    <div className="br-left"></div>
    <div className="br-right"></div>
    </>
  )
}

export default Header;