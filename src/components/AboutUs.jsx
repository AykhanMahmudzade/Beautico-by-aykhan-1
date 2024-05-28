import React from 'react';
import './AboutUs.css';
import Card from './Card';
import Card2 from './Card2';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const AboutUs = () => {
  return (

    <div className='container'>





      <div className="aboutUs text-center">
        <button className='aboutus'>About us</button>
        <h1 className='story2 text-center pt-5'>The beautiful story</h1>
        <p className='text-center pb-4 pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in<br />eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,<br />ut commodo diam libero vitae erat.</p>
        <button className='ourstory'>Our story</button>
        <button className='contactus mx-5'>Contact us <img src="/icons/arror.svg" alt="" /></button>
      </div>



      <div className="bestSellers text-center">
        <button className="bestsellers">Best sellers</button>
        <h1 className='products pt-4'>The most trusted products by our<br />customers</h1>
      </div>

      <div className="productscus">



      <div className="container d-flex justify-content-center align-items-center w-100 vh-100">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card border-0 ">
              <Card
                kartinShekli="/images/clean.svg"
                kartinBasligi="Clean"
                kartinParaqrafi="Lorem ipsum dolor sit amet"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 col-md-6 col-lg-4 mb-4 ">
            <div className="card border-0 ">
              <Card
                kartinShekli="/images/tone.svg"
                kartinBasligi="Tone"
                kartinParaqrafi="Lorem ipsum dolor sit amet"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-0 ">
              <Card
                kartinShekli="/images/soft.svg"
                kartinBasligi="Soft"
                kartinParaqrafi="Lorem ipsum dolor sit amet"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  

   

        <div className="bestsellingc container">

          <div className="row pt-5 ">

            <div className="carta4 col-md-6 mb-4">
              <div className="card border-0">
                <Card2
                  kartinBasligi2="Best selling creams"
                  kartinParaqrafi2="Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Suspendisse varius enim in eros elementum tristique."
                  kartinShekli2="/images/cream.svg "
                />
              </div>
            </div>

            <div className="carta5 col-md-6 mb-4">
              <div className="card border-0">
                <Card2
                  kartinShekli2="/images/bath.svg"
                  kartinBasligi2="Best selling lotions"
                  kartinParaqrafi2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                />
              </div>
            </div>
          </div>




        </div>








      </div>





    </div>
  );
};
export default AboutUs;
