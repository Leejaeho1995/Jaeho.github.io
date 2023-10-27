// import React, { useState } from 'react';

// const TemperatureConverterWithBoilingCheck = () => {
//   // 상태 초기값 설정 (예: 0도 섭씨)
//   const [celsius, setCelsius] = useState(0);
//   const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(celsius));
//   const [isBoiling, setIsBoiling] = useState(false);

//   // 섭씨를 화씨로 변환하는 함수
//   function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
//   }

//   // 섭씨가 끓는 지 확인하는 함수
//   function checkBoiling(celsius) {
//     return celsius >= 100;
//   }

//   // 섭씨 입력 시 이벤트 핸들러
//   const handleCelsiusChange = (e) => {
//     const newCelsius = parseFloat(e.target.value);
//     setCelsius(newCelsius);
//     setFahrenheit(celsiusToFahrenheit(newCelsius));
//     setIsBoiling(checkBoiling(newCelsius));
//   };

//   // 화씨 입력 시 이벤트 핸들러
//   const handleFahrenheitChange = (e) => {
//     const newFahrenheit = parseFloat(e.target.value);
//     setFahrenheit(newFahrenheit);
//     setCelsius(fahrenheitToCelsius(newFahrenheit));
//     setIsBoiling(checkBoiling(fahrenheitToCelsius(newFahrenheit)));
//   };

//   // 화씨를 섭씨로 변환하는 함수
//   function fahrenheitToCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5/9;
//   }

//   return (
//     <div>
//       <label>
//         섭씨:
//         <input type="number" value={celsius} onChange={handleCelsiusChange} />
//       </label>
//       <br />
//       <label>
//         화씨:
//         <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
//       </label>
//       <br />
//       {isBoiling && <p>끓음!</p>}
//       {!isBoiling && <p>온도를 더올려주세요</p>}
//     </div>
//   );
// };

// export default TemperatureConverterWithBoilingCheck;
