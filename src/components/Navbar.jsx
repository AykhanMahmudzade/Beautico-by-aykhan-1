import React, { useRef, useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isShippingVisible, setIsShippingVisible] = useState(true); 
  const blackMenu = useRef();

  const handleShippingClose = () => {
    setIsShippingVisible(false); 
  };

  const openMenu = () => {
    blackMenu.current.classList.add("aktiv");
  };

  const closeMenu = () => {
    blackMenu.current.classList.remove("aktiv");
  };

  const closeMenuOnClick = () => {
    if (blackMenu.current.classList.contains("aktiv")) {
      closeMenu();
    }
  };

  return (
    <>
      {isShippingVisible && ( 
        <p className='text-center shipping' onClick={handleShippingClose}>Free worldwide shipping for orders over $55. Shop now <button className='close' onClick={closeMenu}>X</button></p>
      )}

      <div className="mobile-menu position-fixed" ref={blackMenu}>
        <IoMdClose className='close-icon' onClick={closeMenu} />

        <nav className="mobile-links">
          <Link to="/home" className="nav-link fw-medium" onClick={closeMenuOnClick}>Home</Link>
          <Link to="/products" className="nav-link fw-medium" onClick={closeMenuOnClick}>Products</Link>
          <Link to="/story" className="nav-link fw-medium" onClick={closeMenuOnClick}>Story</Link>
          <Link to="/blog" className="nav-link fw-medium" onClick={closeMenuOnClick}>Blog</Link>
          <Link to="/collections" className="nav-link fw-medium" onClick={closeMenuOnClick}>Collections</Link>
          <Link to="/contact" className="nav-link fw-medium" onClick={closeMenuOnClick}>Contact</Link>
        </nav>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">

          <button onClick={openMenu} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
       
          <div className='buttonss'>
            <button className='cartt mx-3'><img src="/icons/cart.svg" alt="" /> Cart</button>
            <button className='subs text-white border-0'>Subscribe</button>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
