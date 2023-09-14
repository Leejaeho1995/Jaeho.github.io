import React, { useState } from 'react'

const Name = () => {
    const username = '';
    const [userlist, setUserlist]= useState([]);
    const handleUserList =()=>{
        setUserlist((prevState)=>{
            console.log('이전 Name:' + prevState)
            return [username, ...prevState]
        })
    }
  return (

    <div>
        <h1>회원이름</h1>
        <ul className='user'>
            <li>
       <input type="text" value={username}/>
        <button onClick={handleUserList}>등록</button>
        </li>
        </ul>
        {userlist.map((username, idx)=>{
            <li>{username}</li>
        })}
    </div>
  )
}

export default Name