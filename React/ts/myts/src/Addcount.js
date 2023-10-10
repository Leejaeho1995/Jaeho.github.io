import React, { useState } from 'react'

const Addcount = () => {
    const [count, setCount] =useState<Number>(0);
    const handleCount = ()=>{
        setCount(count + 1);
    }
  return (
    <div>
        <h2>Count: {count} </h2>
        <button onClick={handleCount}> 증가 </button>
    </div>
  )
}

export default Addcount