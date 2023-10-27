import React ,{useState, useEffect, useLayoutEffect} from 'react'
import { Container, Row, Col ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import { FcBriefcase, FcMenu, FcDownLeft } from "react-icons/fc";
const App = () => {
  const [isInCart,setIsInCart] =useState(false);
  const [addToCart,setAddToCart] =useState([]);
  const [cartCount,setCartCount] = useState(false);
  
  useEffect(()=>{
    const cCount = addToCart.length;
    if(cCount > 0){
      setCartCount(true);
    }else{
      setCartCount(false);
    }
  },[addToCart])

  const closeOpenClick = ()=>{
    setIsInCart(!isInCart);
  }
  console.log(addToCart)
  return (
    <>
  <Container>
    <header>
    <h1>LOGO</h1>
    <div className='cartbox' onClick={closeOpenClick}>
      <FcBriefcase className='cart'/>
       {cartCount && <span>{addToCart.length}</span>}
    </div>
    </header>
    <Row>
      <Col md={12}>
      <h1 className='text-center'>My Shopping Cart</h1>
      </Col>
    </Row>
    <Row>
      <Col md={12}>
        <ProductList setIsInCart={setIsInCart}
        addToCart={addToCart}
        setAddToCart={setAddToCart} />
      </Col>
      { isInCart && 
      <ul className='cart-list'> 
      <CartList addToCart={addToCart}
        setAddToCart={setAddToCart}
        closeOpenClick={closeOpenClick}/>
        </ul>}
        
        </Row>
  </Container>
    <footer className='mt-5 pt-3 pb-2 border-top text-white' style={{backgroundColor:"var(--bs-gray-600)"}}>
    <p className='text-center'>My React Shop Cart</p>
    </footer>
    </>
  )
}

export default App