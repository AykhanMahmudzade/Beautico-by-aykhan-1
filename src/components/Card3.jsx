import React from 'react'
import './Card3.css';


const Card3 = ({ kartinBasligi3, kartinShekli3, kartinParaqrafi3 }) => {
    return (
        <div className='card3 card container border-0 bg-white pt-5'>

             <img src={kartinShekli3} alt="" className='hiw-img w-100' /> 

            <div className="card-body p-0 py-3">
                <h1 className='title3 text-center'>{kartinBasligi3}</h1>
                <p className='paragraph3 pt-3 text-center'>{kartinParaqrafi3}</p>
            </div>



        </div>
    )
}

export default Card3