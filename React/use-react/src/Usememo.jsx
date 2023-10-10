import React, {useState, useMemo} from 'react'

const verryHardCal = (num) =>{
  console.log('매우 복잡하고 어려운 계산을 한다.')
  for(let i = 0;i<9999; i++){}//복잡한 계산을 진행중
  console.log('복잡한 계산중...')
  return num + 100000;
}
const verryEasyCal = (num) =>{
  console.log('간단하고 쉬운계산중')
  return num + 100000;
}

const Usememo = () => {
  const [mynum, setMynum] = useState(9999);
  const [memNum, setMemNum] = useState(10);

  const hardSum = useMemo(()=>{
    return verryHardCal(mynum)
  },[mynum])
  
  const easySum = verryEasyCal(memNum);

 console.log('렌더링됨') //시작하고 끝날때 렌더링이 됨 / 값이 변할때 리렌더링이 됨
  return (
    <>
    <div>
      <h1>아주 엄청나게 복잡한 계산기</h1>
      <input type="number" name='mynumber' value={mynum} onChange={(e)=>setMynum(parseInt(e.target.value))} />
      <span>+ 1,00000 = {hardSum}</span>
    </div>
    <div>
    <h1>아주 엄청나게 쉬운  계산기</h1>
    <input type="number" name='easynum' value={memNum} onChange={(e)=>setMemNum(parseInt(e.target.value))} />
    <span>+ 1,00000 = {easySum}</span>
  </div>
  </>
  )
}

export default Usememo