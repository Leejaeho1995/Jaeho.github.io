import React from 'react'

const Card = ({greenTitle, title, img , content}) => {
  return (
    <div className='col-4'>
        <div className="card">
            <div className="card-img">
                <img src={img} alt='dd'/>
            </div>
            <div className="card-content">
                <h4>{greenTitle}</h4>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
        
        </div>
  )
}

export default Card