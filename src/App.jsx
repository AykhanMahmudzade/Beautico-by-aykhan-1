import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ArticlesSection from './components/ArticlesSection';
import Blog from './components/containers/Blog';
import Collections from './components/containers/Collections';
import Contact from './components/containers/Contact';
import NotFound from './components/containers/NotFound';
import Products from './components/containers/Products';
import Story from './components/containers/Story';
import Home from './components/containers/Home'
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Accordion from './components/Accordion'
import Latest from './components/Latest';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/home" element={<Home/>}  />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<Story />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
