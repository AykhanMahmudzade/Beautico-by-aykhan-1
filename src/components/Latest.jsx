import React from 'react'
import './Latest.css'
import Card5 from './Card5'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Latest = () => {
  return (
    <>
    <div className='container pt-5'>


    <div class="row ">

    <div class="latest-left-side col-12 col-md-6">

    <p className='pt-5'> <button className='works'>Latest posts</button> </p>
     <h1 className='fub'>From our blog</h1>
     <p className='sit pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div class="latest-right-side col-12 col-md-6">
    <p className='d-flex justify-content-end vap'> <button className='ourstory pt-2 text-center shopnow'>View all posts</button> </p> 
     
    </div>



    </div>

    </div>



<div className="container">


<div className="cartlar pt-5">


    <div className="row lp">
    
<div className="col-12 col-md-6 col-lg-4 pt-5">
 <div className="card">
<Card5
 kartinShekli5="/images/antiage.svg"
 kartinBasligi5="Dry acne prone skincare routine"
kartinParaqrafi5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
 />
 </div>
    
 </div>



<div className="col-12 col-md-6 col-lg-4 pt-5">
 <div className="card border-0 ">
<Card5
 kartinShekli5="/images/skintypes.svg"
 kartinBasligi5="5 ingredients to calm down stressed out skin"
kartinParaqrafi5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
 />
 </div>
    
 </div>




<div className="col-12 col-md-6 col-lg-4 pt-5">
 <div className="card border-0 ">
<Card5
 kartinShekli5="/images/organic.svg"
 kartinBasligi5="How to use products for sensitive skin"
kartinParaqrafi5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
 />
 </div>
    
 </div>



 </div>

</div>

</div>




<div className=" d-flex psot justify-content-between">

<Swiper
        spaceBetween={110}
        slidesPerView={4}
        centeredSlides={true}
        speed={300}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><img src="/images/post1.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/post2.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/post3.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/post4.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/post5.svg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="/images/post6.svg" alt="" /></SwiperSlide>

      
      ...
      </Swiper>



</div>






</>

  )
}

export default Latest