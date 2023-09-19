import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb';
import {FaGoogleWallet} from 'react-icons/fa';
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'
const Topnav = () => {
    const [sideNav, setSideNav] = useState(false);
    console.log(sideNav)
  return (
    <div className='max-w-[1520px]
     mx-auto flex justify-between items-center p-4'>
        <div className="flex items-center">
            <div onClick={()=>setSideNav(!sideNav)} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                JAEHO <span className="font-bold">요리교실</span>
            </h1>
        </div>
        <div className="hidden
         lg:flex items-center 
         bg-gray-200 rounded-full p-1 text-[14px]">
         <p className="bg-orange-700 text-white rounded-full text-bold">
              FREE
        </p>
         <p className="p-2 text-bold">
          Delivery</p>
         </div>
         <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25}/>
          <input className='bg-transparent p-2 w-full 
          focus:outline-none' type='text' placeholder='레시피 검색'/>
         </div>

         <button className="bg-red-700 text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20}/> Cart
         </button>
         {sideNav ? (
          <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
               onClick={()=>setSideNav(!sideNav)}></div>
       ) : ("")} 
       
          <div className={sideNav?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":
              "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <AiOutlineClose onClick={()=>setSideNav(!sideNav)} size={25} 
    className='absolute right-4 top-4 cursor-pointer'/>
    <h2 className="text-2xl p-4">JAEHO 요리교실</h2>

          <nav>
            <ul className="felx flex-col p-4 text-gray-900">
              <li className="text-xl py-4 flex">
            <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' />
            My Account
              </li> <li className="text-xl py-4 flex">
              <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full' />
              배송조회
              </li>
              <li className="text-xl py-4 flex">
              <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' />
              My Favorite
                </li>
                <li className="text-xl py-4 flex">
                <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' />
                내 지갑
                </li>
                <li className="text-xl py-4 flex">
                <MdHelp size={25} className='mr-4 text-white bg-black rounded-full' />
                Help
                </li>
            </ul>
          </nav>
    </div>
    


    </div>
  )
}

export default Topnav