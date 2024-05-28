import React from 'react';
import './Storyi.css';
import Card from './Card';
import Card2 from './Card2';


const Story = () => {
  return (
    <div className='container pt-5'>
      <div className="aboutUs text-center">
        <button className='aboutus'>About us</button>
        <h1 className='story2 text-center pt-5'>The beautiful story</h1>
        <p className='text-center pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in<br />eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,<br />ut commodo diam libero vitae erat.</p>
        <div className="contstr">
        <button className='ourstory'>Our story</button>
        <button className='contactus mx-5'>Contact us <img src="/icons/arror.svg" alt="" /></button>
        </div>
      </div>

      <div className="bestSellers text-center">
        <button className="bestsellers">Best sellers</button>
        <h1 className='products pt-4'>The most trusted products by our<br />customers</h1>
      </div>
      

      <div className="productscus">
        <div className="row">

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 ">
            <Card
              kartinShekli="/images/clean.svg"
              kartinBasligi="Clean"
              kartinParaqrafi="Lorem ipsum dolor sit amet"
            />
            </div>

             </div>


             <div className="col-12 col-md-6 col-lg-4   ">
             <div className="card mx-4 border-0">

            <Card
              kartinShekli="/images/tone.svg"
              kartinBasligi="Tone"
              kartinParaqrafi="Lorem ipsum dolor sit amet"
            />
            </div>

             </div>


            <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card mx-5 border-0">

            <Card
              kartinShekli="/images/soft.svg"
              kartinBasligi="Soft"
              kartinParaqrafi="Lorem ipsum dolor sit amet"
              />
             </div>

             </div>

             </div>



        <div className="articles-two row">


<div className="row pt-5">

    <div className="col-12 col-md-6">  

    <div className="card card4 border-0">
    <Card2
          kartinBasligi2 ="Best selling creams" 
          kartinParaqrafi2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit.   Suspendisse varius enim in eros elementum tristique."
          kartinShekli2="/images/cream.svg " 

          />
          </div>

       </div>

    <div className="col-12 col-md-6 ">

    <div className="card card5 border-0">

       <Card2
        kartinShekli2="/images/bath.svg" 
        kartinBasligi2 ="Best selling lotions"
         kartinParaqrafi2 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."  
           /> 
         </div>

         </div>
</div>

</div>


        </div>
      </div>


  );
};

export default Storyi;
