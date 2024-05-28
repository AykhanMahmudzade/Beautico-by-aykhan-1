import React from 'react';
import './Card.css';

const Card = ({ kartinBasligi, kartinShekli, kartinParaqrafi }) => {
    
  return (
    
    <div className='card card1 container border-0 w-100 d-flex justify-content-center align-items-center '>
      <img src={kartinShekli} alt="" className='blog-img1 pt-5 w-100 ' />
      <div className="card-body cb p-0 py-3 ">
        <h1 className='title pt-4 d-flex justify-content-center align-items-center  '>{kartinBasligi}</h1>
        <p className='paragraph d-flex justify-content-center align-items-center  '>{kartinParaqrafi}</p>
         <a href="#" className="btn detal d-flex justify-content-center align-items-center pd">Product details</a> 
      </div>
    </div>
  );
}

export default Card;
