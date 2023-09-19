import React, {useEffect} from 'react'

const Counter = (props) => {
    useEffect(()=>{
        const ct = setInterval(()=>{
            console.log("카운터 실행");
        },1000)
    }, [])
    return ()=>{
clearInterval(ct);
 console.log("카운터 종료");
    }
  return (
    <>
    <div>
    <h1>Counter</h1>
    <p>콘솔에서 확인</p>
    </div>
    </>
  )
}

export default Counter