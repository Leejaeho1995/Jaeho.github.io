import React, {useState, useEffect, useCallback} from 'react'

const App = () => {
  const [number, setNumber] = useState(0);
  const sumFunction = useCallback(()=>{
    let num = parseInt(number);
    setNumber(num + 1000);
    console.log(`더한값은: ${number}`)
  },[number]); //callback을 통해 함수를 담아둠

  // const sumFunction =()=>{ //함수형 변수안에 number의 값이 바뀌기때문에 sumFunction값이 바뀌면 똑같이 number값이 바뀌어도 랜더링됨
  //   let num = parseInt(number);
  //   setNumber(num + 1000);
  //   console.log(`더한값은: ${number}`)
  // }
  useEffect(()=>{
    console.log('sumFunction의 값이 변경되었습니다.')
  },[sumFunction])
  return (
    <div>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
      <br/>
    <button onClick={sumFunction}>1000을 더하자</button>
    </div>
  )
}

export default App