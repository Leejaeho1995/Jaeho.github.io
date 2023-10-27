import React from 'react'
import {Button} from 'react-bootstrap';
import Cart from './Cart';
const CartList = (
    {addToCart, setAddToCart, closeOpenClick}
    ) => {

  return (
    <>
    <ul className='cart-list'>
        {
        addToCart.map(mcart=>(
            <li>
            <Cart key={mcart.id}
            id={mcart.id}
            name={mcart.name}
            price={mcart.price}
            image={mcart.image}
            addToCart={addToCart}
            setAddToCart={setAddToCart} />
            </li>
        )) 
        }
    </ul>
    <div className='text-center'>
    <Button className='btn-button' variant="danger" onClick={closeOpenClick}>닫기</Button>
    </div>
    </>
  )
}

export default CartList