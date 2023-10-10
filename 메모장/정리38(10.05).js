import React from 'react'
const app = () => {
    addResult();
    return (
        <div>ddd</div>
    )
}
//usestate 는 렌더링


function addResult(){    //랜더링을 다시하지않고 사용
    const ad = addAct();
    return "결과는" +ad;
}

function addAct(){ //ex 계산이 10분이 걸리는 함수
    let a= 0,b=12,c=122;
   return a + b * 2 + c

}