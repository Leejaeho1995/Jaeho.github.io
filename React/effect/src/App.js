import { useEffect , useState} from 'react';
import Counter from './Counter';
import './App.css';

function App() {
  const [playCount, setPlayCounter] = useState(false);
const [count, setCount] = useState(1);
const [name, setName] = useState('');
const handleInputChange = (e)=>{
 // e.target.value  (input타입의 값) e.target.name 이름값
 setName(e.target.value);
}
//useEffect
useEffect(()=>{
  console.log("랜더링 되었으므로 실행됨")
  
})
  return (
    <>
    {/* <div>Count: {count} </div>
    <div><button onClick={()=>setCount(count+1)}>증가</button></div>
    <div>
<input type='text' value={name} onChange={handleInputChange}/>
    </div> */}
    {playCount && <Counter/>}
    <button onClick={()=>setPlayCounter(!playCount)}>카운터 보기/끄기</button>
  </>
  )
}

export default App;
