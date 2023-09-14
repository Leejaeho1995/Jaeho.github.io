import React , {useState } from 'react';

//수정하는 함수 앞에 set붙힘
const Todo = (props) => {
    const [input,setInput] = useState('');
    const [todolist, setTodolist] = useState([]);
    const handleInputChange =(e)=>{
     setInput(e.target.value)
     console.log(e.target.value)
    }
    const handleTodoList =() =>{
        setTodolist((prevState)=>{
            console.log('이전 state:' + prevState)
            return [input, ...prevState]
        })
    }
    
      return (
        <div>
            <h1>{props.title}</h1>
          <ul className='todo'>
          <li> <span>오늘할일</span> 
        <input type='text' value={input} onChange={handleInputChange} />
        <button onClick={handleTodoList}>등록</button> 
          </li>
          {
            todolist.map((todo, idx)=>(
                <li key={idx}>{todo}</li>
            ))
          }
          </ul>
        </div>
      );
    
    
      }

export default Todo