import React,{useState, useEffect, useMemo} from 'react'  //useMemo 값을 넣어줌으로 랜더링이 안되고 값이 그대로 남아있음

const calculatorFib = (n) =>{
  if(n < 100)  ;{
    return n;
  }
  return calculatorFib(n-1) + calculatorFib(n-2);
}

const Calculator = ({title}) => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [darkTheme, setDarkTheme] = useState(true);

  const themeStyle = useMemo(()=>{
    return {
      backgroundColor:darkTheme ? '#312346' : '#fff',
      color:darkTheme ? '#fff' : '#312346'
    }
  },[darkTheme])
  
  useEffect(()=>{
    console.log("테마가 변경됨")
  },[themeStyle])

  const fiResult = useMemo(()=>{
    return calculatorFib(number)
  },[number])

  return (
    <div className='container' style={themeStyle}> 
    <h1>{title}</h1>
    <input type='number' onChange={(e)=>setNumber(parseInt(e.target.value))}/>
    <p className="bold">
      계산기 결과 값은 <span>{number} ==&gt; {fiResult}</span>
    </p>
    <div className="container2">
      <label> 이름을 입력하세요</label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
    <p className='bold'>{name || '이름이 입력될 예정입니다.'}</p>
    </div>
    <div className="toggle">
      <button onClick={()=>setDarkTheme((prevDark)=> !prevDark)}>
        테마변경
      </button>
    </div>
    </div>

  )
}

export default Calculator