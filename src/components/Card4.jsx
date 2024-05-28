import React from 'react'
import './Card4.css'

const Card4 = ({ kartinBasligi4, kartinShekli4, kartinParaqrafi4, kartinVezifesi4 }) => {
  return (
    <>

     <div className='card4 card border-0'>


<div className="card-body p-0 py-3">
<img className='' src="/icons/stars.svg" alt="" />

<p className='paragraph3 pt-3 text-center'>{kartinParaqrafi4}</p>
<h6 className=''>{kartinBasligi4}</h6>
<p className=''>{kartinVezifesi4}</p>
<img src={kartinShekli4} alt="" className='' />

</div>



</div>
    </>
  )
}

export default Card4