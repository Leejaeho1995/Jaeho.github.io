import React from 'react'
import { FcCancel } from "react-icons/fc";
const Cart = ({id, name, price, image,addToCart, setAddToCart}) => {
  const delHandler =() =>{
    setAddToCart(addToCart.filter(ct=>ct.id !== id)) //삭제할 내용을 빼고 나머지내용들을 setAdd에 다시 담는다.
  }
    return (
      <div className='cartbox'>
        <img src={image} alt={name} />
        <div className='cart-text'>
          <h5>{name}</h5>
          <p>{price}</p>
          <FcCancel className='cart-del' onClick={delHandler} />
        </div>
      </div>
  )
}

export default Cart