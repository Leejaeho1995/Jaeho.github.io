import React from 'react'
import { Link } from 'react-router-dom'
const Nopage = () => {
  return (
    <div>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <Link to='/'>메인 페이지로</Link>
    </div>
  )
}

export default Nopage