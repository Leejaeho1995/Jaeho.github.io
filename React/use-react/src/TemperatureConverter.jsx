import React, { useState } from 'react'

  // const verryHardCal = (num) =>{
  //   console.log('매우 복잡하고 어려운 계산을 한다.')
  //   for(let i = 0;i<9999; i++){}//복잡한 계산을 진행중
  //   console.log('복잡한 계산중...')
  //   return num + 100000;
  // }
  // const verryEasyCal = (num) =>{
  //   console.log('간단하고 쉬운계산중')
  //   return num + 100000;
  // }

  // const Usememo = () => {
  //   const [mynum, setMynum] = useState(9999);
  //   const [memNum, setMemNum] = useState(10);

  //   const hardSum = useMemo(()=>{
  //     return verryHardCal(mynum)
  //   },[mynum])
  
  //   const easySum = verryEasyCal(memNum);

  //  console.log('렌더링됨') //시작하고 끝날때 렌더링이 됨 / 값이 변할때 리렌더링이 됨

  const TemperatureConverter =() =>{
  //상태 초기값설정 (0도섭씨)
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit);
  const [isBoiling, setIsBoiling] = useState(false);
 //섭씨를 화씨로 변환하는 함수
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  // 화씨를 섭씨로 변환하는 함수
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit -32) *5/9
  }
  //섭씨 입력시 이벤트 헨들러
  const handleCelsiusChange =(e)=>{
    const newCelsius =parseFloat(e.target.value)
    setCelsius(newCelsius);
    setFahrenheit(celsiusToFahrenheit(newCelsius));
    setIsBoiling(checkBoiling(newCelsius));
  };
  //화씨 입력시 이벤트 헨들러
  const handleFahrenheitChange =(e)=>{
    const newFaherenheit = parseFloat(e.target.value);
    setFahrenheit(newFaherenheit);
    setCelsius(fahrenheitToCelsius(newFaherenheit));
    setIsBoiling(checkBoiling(fahrenheitToCelsius(newFaherenheit)));
  }
 //텍스트
function checkBoiling(celsius){
  return celsius >= 100;
}
 //
  return (
    <>
    <div>
    <label>
    온도를 입력해주세요 (단위 섭씨)
    <input type='number' value={celsius} onChange={handleCelsiusChange}/>
    </label>
    </div>
    <br/>
    <div>
    <label>
    온도를 입력해주세요 (단위 화씨)
    <input type='number' value={fahrenheit} onChange={handleFahrenheitChange}></input>
    </label>
    </div>
    <br/>
    {isBoiling && <p>물이 끓습니다.</p>}
    {!isBoiling && <p>온도를 더 올려주세요</p>}
    </>
  )
 }

export default TemperatureConverter;