import React , { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { UserContext } from '../Context/UserContext'

const Header = () => {
  const {isLight} = useContext(ThemeContext);
  const user =useContext(UserContext);
  return (
    <div style={{
        padding:"10px",
        textAlign:"center",
        fontSize:"20px",
        fontWeight:"bold",
        backgroundColor: isLight? "#ededed" : "#333",
        color: isLight? "#000" : "#fff",
        borderBottom:"1px solid #333"
    }}>반갑습니다. {user}님.</div>
  )
}

export default Header