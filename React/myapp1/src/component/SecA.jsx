import React from 'react'
import styled from 'styled-components'

const Seca = styled.h1`
    font-size:30px;
    margin-top: 25px;
    margin-left: 25px;
    color: rgba(0,0,0,.5);
`;
const Rainbow = styled.p`
    width:200px;
    height:1px;
    margin-top:15px;
    border:0px solid;
    background-image: radial-gradient(circle at -13.7% 44.43%, #ff885f 0, #ff8f50 4.17%, #ff9642 8.33%, #ff9e36 12.5%, #f7a52a 16.67%, #e9ac1f 20.83%, #dbb218 25%, #cbb717 29.17%, #babd1d 33.33%, #a9c127 37.5%, #96c533 41.67%, #81c941 45.83%, #6acc50 50%, #4dcf60 54.17%, #16d170 58.33%, #00d381 62.5%, #00d493 66.67%, #00d5a5 70.83%, #00d6b7 75%, #00d6c9 79.17%, #00d6db 83.33%, #00d6ec 87.5%, #00d5fc 91.67%, #00d4ff 95.83%, #00d2ff 100%); 
`;
const SecA = () => {
  return (
    <div>
    <Seca>Ipsum sed adipiscing</Seca>
    <Rainbow></Rainbow>
    </div>
  )
}

export default SecA