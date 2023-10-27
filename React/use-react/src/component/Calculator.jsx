import React from 'react'
import TempertureInput from './TempertureInput'
import { useState } from 'react'
const Calculator = () => {
    const [temperature, setTemperature] = useState('');
    const [scale, SetScale] = useState("c");
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale ==="c" ? tryConvert(temperature, ToFahrenheit) : temperature;

    function toCelsius(temp){
            return (temp *5 ) /9 -32
        }
    function ToFahrenheit(temp)
        {
            return (temp * 9) /5 + 32
        }

    const handleCelsiusChange =(temperature) =>{
        setTemperature(temperature);
        SetScale("c");
    }
    const handleFahrenheitChange =(temperature) =>{
        setTemperature(temperature);
        SetScale("f");
    }
    function BoilingWater(props){
        if(props.celsius >=100){
            return <p>물이 끓습니다</p>
        }else{
            return <p>물이 끓지 않습니다.</p>
        }
    }
    function tryConvert(temperature, convert){
        const input = parseFloat(temperature);
        if(Number.isNaN(input)){
            return "";
        }else{
        const outpunt = convert(input)
        const rounded = Math.round(outpunt * 1000) /1000;
        return rounded.toString();
        }
    }
  return (
    <div>
        
        <div style={{width:"400px",margin:"auto"}}>
        <h1 style={{textAlign:"center"}}>섭씨 ,화씨 변환</h1>
        <TempertureInput
        scale="c"
        temperature={celsius} 
        onTempChange ={handleCelsiusChange}/>
        <TempertureInput 
        scale="f"
        temperature={fahrenheit}
        onTempChange ={handleFahrenheitChange} />
        <BoilingWater celsius={parseFloat(celsius)} />
        </div>
    </div>
  )
}

export default Calculator