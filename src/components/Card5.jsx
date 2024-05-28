import React from 'react'
import './Card5.css'

const Card5 = ({ kartinBasligi5, kartinShekli5, kartinParaqrafi5 }) => {
  return (
    <>
   <div className="card card5 container border-0"></div>
   <img src={kartinShekli5} alt="" className='blog-img' />
   <div className="card-body p-0 py-3">
        <h1 className='title'>{kartinBasligi5}</h1>
        <p className='paragraph'>{kartinParaqrafi5}</p>
        <a href="#" className="text-center text-decoration-none  text-black">Read more <img src="/images/arrow.svg" alt="" /></a>
      </div>
    </>
  )
}

export default Card5