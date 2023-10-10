import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { portfoliodata, imgData } from '../data/portfolio'
import {Button, Modal} from 'react-bootstrap'
const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState('');
const handleToggle =()=>{
  setImg(!img);
}
  const handleClose = ()=>{
    setShow(false);
  }
  const handleShow =() =>{
    setShow(true);
  }
  return (
    <HelmetProvider >
    <div className='container mt-5'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{portfoliodata.title}</title>
        <meta name='description' content={portfoliodata.description} />
      </Helmet>
      <div className='d-flex justify-content-between'>

      <h1 className='mt-5 mb-5 ms-5 bt-line border-bottom'>
      MY Poftfolio</h1>
      <div className='btn-box mb-5 mt-5'>
      <button type='button' className='btn btn-warning'>
          All
        </button>
        <button type='button' className='btn btn-warning ms-4'>
          Web
        </button>
        <button type='button' className='btn btn-warning ms-4'>
          App
        </button>
        <button type='button' className='btn btn-warning ms-4'>
          Design
        </button>
      </div>
      </div>
      <div className='row'>
        {
          imgData.map((item, index)=>(
              <div key={index} className='col-6 col-lg-3 portfolio-img'> 
              <img src={`https://picsum.photos/id/${item.img}/400/300`}
               className='img-fluid img-thumnail mb-5' onClick={handleShow} />
              </div>            
          )
          )
        }
    </div>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        포토폴리오 설명
       </Modal.Header>
       <Modal.Body closeButton>
        {img}
       </Modal.Body>
    </Modal>
    </HelmetProvider>
  )
};

export default Portfolio