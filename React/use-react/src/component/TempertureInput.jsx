import React from 'react'
const scaleName = {
  c:"섭씨",
  f:"화씨"
}
const TempertureInput = (props) => {
  const handleChange =(e)=>{
    props.onTempChange(e.target.value);
  }
  return (
    <div>
        <fieldset>
            <legend>
                온도를 입력하세요 (단위:{scaleName[props.scale]})
            </legend>
            <input type='text' value={props.temperature}
            onChange={handleChange}/>
        </fieldset>
    </div>
  )
}

export default TempertureInput