import React, {useState, useRef } from 'react' //useState 페이지를 랜더링
import Form from './Form';
const App = () => {
  const [mystate, setMystate] = useState(0);
  const myref = useRef(0);
  let myvar = 0;
  const handleState =()=>{
    setMystate(mystate + 1);
  }
  const handleRef =()=>{
    myref.current = myref.current + 1;
    //console.log(myref.current)
  }
const handleVar =()=> {
  myvar = myvar + 1
  //console.log("번수값:" + myvar);
}

  //console.log("Rerendring!!" +mystate)
  return (
    <>
    <div>
       <p>State 값:{mystate} </p> 
       <p>Ref값: {myref.current} </p> 
       <p>var값: {myvar}</p>
       <button onClick={handleState}>state값 변경</button>
       <button onClick={handleRef}>Ref 값 증가</button>
       <button onClick={handleVar}>Var값 증가</button>
      </div>
      <Form />
      </>
  )
}

export default App