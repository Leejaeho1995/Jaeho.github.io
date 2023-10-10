import React, {useRef, useCallback} from 'react'
import Card from './component/Card';
const Refform = () => {
    console.log("####REFFORM$####")
    const fullNameInputElement = useRef();
    const emailInputElement = useRef();
    const passInputElement = useRef();
    const passConfirmInputElement = useRef();
    
    const formHandler = useCallback(
        ()=> (event) =>{
            event.preventDefault();
            const data ={
                fullName: fullNameInputElement.current?.value,
                email: emailInputElement.current?.value,
                pass: passInputElement.current?.value,
                passConfirm: passConfirmInputElement.current?.value
            };
            console.log(data);
        },[]
    )
  return (
    <div className='flex h-screen bg-gray-500 w-screen items-center justify-center'>
        <Card>
        <h1 className='text-3xl'>Sign up</h1>
        <form className='mt-4 ' onSubmit={formHandler()}>
            <div className='flex flex-col mb-4'> 
            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='full_name'>
                이름
            </label>
            <input type='text' ref={fullNameInputElement} placeholder='이름' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none focus:shadow-outline'
            id='full_name' />
            </div>

            <div className='flex flex-col mb-4'> 
            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='pass'>
                비밀번호
            </label>
            <input type='password' ref={passInputElement} placeholder='비밀번호' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none focus:shadow-outline'
            id='pass' />
            </div>
            <div className='flex flex-col mb-4'> 
            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='pass_confirm'>
                비밀번호 확인
            </label>
            <input type='password' ref={passConfirmInputElement} placeholder='비밀번호 확인' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none focus:shadow-outline'
            id='pass_confirm' />
            </div>

            <div className='flex flex-col mb-4'> 
            <label className='text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                이메일
            </label>
            <input type='email' ref={emailInputElement} placeholder='이메일' className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-right focus:outline-none focus:shadow-outline'
            id='email' />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline'>전 송</button>
        </form>
        </Card>
    </div>
  )
}

export default Refform