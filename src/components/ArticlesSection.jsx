import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './ArticlesSection.css'


import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const ArticlesSection = () => {
  return (
    <>
<div className="introductions">
  <section className='container introduction'>


<div className='row'>



<div class="intro-left-side pt-5 col-12 col-md-6 ">

<h1 className='skin'>Hydrated skin in 3 <br /> easy steps</h1>
<p className='lorem pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique duis <br /> Cursus mi quis viverra ornare.</p>

<div class="buttons pt-4 pb-4">
  <button class="shopp text-white">Shop now</button>
  <button class="story mx-3 ">Our story</button>
</div>




</div>


<div class="intro-right-side col-12 col-md-6 ">

<img className='man' src="/images/model.svg" alt="" />

</div>




</div>





  </section>



  <section className='partners container'>
    

  <p className='pt-5'>Trusted by the world's best companies</p>


  <div class="partners1 pt-3">
  <ul>
    <li><img class="logo1" src="/icons/logo1.svg" alt="Logo 1" /></li>
    <li><img class="logo2" src="/icons/logo2.svg" alt="Logo 2" /></li>
    <li><img class="logo3" src="/icons/logo3.svg" alt="Logo 3" /></li>
  </ul>
</div>


<div className="partners2 pt-5 d-flex justify-content-between">

<Swiper
        spaceBetween={110}
        slidesPerView={4}
        centeredSlides={true}
        speed={300}

        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
       
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
      <SwiperSlide><p className='back text-center'>Healthy supplement</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Gluten-free</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Natural products</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Free shipping</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Eco-friendly</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Vitamins</p></SwiperSlide>

      <SwiperSlide><p className='back text-center'>Healthy supplement</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Gluten-free</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Natural products</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Free shipping</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Eco-friendly</p></SwiperSlide>
      <SwiperSlide><p className='back text-center'>Vitamins</p></SwiperSlide>
      
      ...
      </Swiper>



</div>




  </section>


  </div>
  





    </>




  )
}

export default ArticlesSection