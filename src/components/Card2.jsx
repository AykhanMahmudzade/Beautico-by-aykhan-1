import React from 'react';
import './Card2.css';

const Card2 = ({ kartinBasligi2, kartinShekli2, kartinParaqrafi2 }) => {
    
  return (
    <div className='card card2 border-0'>
    <h1 className='title1 text-center pt-3'>{kartinBasligi2}</h1>
    <p className='paragraph1 text-center pt-4'>{kartinParaqrafi2}</p>
    <div className="card-body p-0 py-3 text-center ">

    <a href="#" className="btn detal button text-center">Shop now</a>
    </div>

    <img src={kartinShekli2} alt="" className='blog-imgs1' />
    </div>
  );
}

export default Card2;
