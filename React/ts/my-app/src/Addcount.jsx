import React, { useState } from 'react'

const Addcount: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleCount =()=>{
    setCount(count + 1)
  }
  return (
    <div>
      <h2>Count 증가: {count} </h2>
      <button onClick={handleCount}>카운트증가</button>
    </div>
  )
}

export default Addcount