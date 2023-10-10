import React, {useState, useRef, useCallback } from 'react'
// import Refform from './Refform';
import Stateform from './Stateform';

const App = () => {
  // state값을 올리면 렌더링이 됌
  //var은 state값을 올리면 초기화 / Ref는 저장이되어 초기화되지 않음. ( Ref는 DOM을 잡을때 사용)
  // const [stCount, setStCount] = useState(0);
  // let varCount = 0;
  // const refCount = useRef(0);
  // const addState= () =>{
  //   setStCount(stCount + 1);
  //   console.log('state:' + stCount)
  // }
  // const addVar =() =>{
  //    varCount = varCount + 1 ;
  //   console.log('var:' + varCount)
  // }
  // const addRef =() =>{
  //   refCount.current = refCount.current + 1;
  //   console.log('addRef:' + refCount.current)
  // }
  const fullNameInputElement = useRef();

  return (
    <div>
         <Stateform />
      {/* <div>
      <label>State값: </label>
      {stCount}
      </div>
      <div>
        <label>일반변수:</label>
        {varCount}
      </div>
      <div>
        <label>Ref변수: </label>
        {refCount.curret}
      </div>
      <div>
        <button onClick={addState}> State값 증가</button>
        <button onClick={addVar}> var값 증가</button>
        <button onClick={addRef}> Ref값 증가</button>
      </div> */}
    </div>

  )
}

export default App

