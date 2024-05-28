import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zhktt76', 'template_s68zbib', e.target, 'TIdD3NFeQ7X5p-tGb')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setEmail('');
            }, (error) => {
                console.error('Failed to send email:', error.text);
            });
    };

    return (

        <>
            <div class="container text-center footer">
                <div class="row align-items-start">



                    <div class="col">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='join pb-4' htmlFor="emailInput">Join our newsletter to stay up to date on features and releases.</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailInput"
                                    name="user_email"
                                    placeholder="example@mail.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className='pt-3'>
                                <button type="submit" className="subscribe text-white">Subscribe</button>
                            </div>
                        </form>    </div>




                    <div class="col">
                        <div class="column-end">
                            <h3>Pages</h3>
                          <p><a href="">Home</a> </p> 
                          <p> <a href="">About</a> </p>
                          <p> <a href="">Contact</a> </p> 
                          <p> <a href="">Blog</a> </p>
                          <p><a href="">FAQs</a> </p> 
                          <p> <a href="">Legal</a> </p>
                        </div>    
                        
                        </div>




                    <div class="col">
                    <div class="column-end">
                        <h3>CMS Pages</h3>
                        <p><a href="">Blog Post</a> </p> 
                          <p> <a href="">Blog Categories</a> </p>
                          <p> <a href="">Product Page</a> </p> 
                          <p> <a href="">Product Categories</a> </p>
                          
                    </div>             
                          </div>


                    <div class="col">
                    <div class="column-end">
                    <h3>Account Pages</h3>

                    <p><a href="">Login</a> </p> 
                          <p> <a href="">Sign Up</a> </p>
                          <p> <a href="">Forgot Password</a> </p> 
                          <p> <a href="">Reset Password</a> </p>
                          <p><a href="">Email Confirmation</a> </p> 
                    </div>             
                          </div>


                    <div class="col">
                    <div class="column-end">
                    <h3>Utility Pages</h3>

                    <p><a href="">Style Guide</a> </p> 
                          <p> <a href="">Changelog</a> </p>
                          <p> <a href="">Licenses</a> </p> 
                          <p> <a href="">404</a> </p>
                          <p><a href="">Password</a> </p> 
                    </div>             
                          </div>





                </div>
            </div>






            <div class="container">
  <div class="row">
    <div class="son-left-side col-12 col-md-6">
      <div class="son">
        <div class="container">
          {/* <img class='xett' src="/images/xet.svg" alt="" /> */}
          <p class='pt-5 pwrd'>© Beautico by Minimal Square. Powered by Webflow.</p>
        </div>
      </div>
    </div>
    <div class="son-right-side col-12 col-md-6">
      <div class="social">
        <a href="" class='mx-3'><img src="/icons/facebook.svg" alt="" /></a>
        <a href="" class='mx-3'><img src="/icons/ig.svg" alt="" /></a>
        <a href="" class='mx-3'><img src="/icons/x.svg" alt="" /></a>
      </div>
    </div>
  </div>
</div>









            
        </>
    );
}

export default Footer;
