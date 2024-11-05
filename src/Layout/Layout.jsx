import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarJsx from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import ProCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/zarla-makeup-logos-4096x2731-20211110.webp';
import image2 from '../assets/stylish-living-room-table-panorama-dark-cyan-color-wall-molding-modern-dining-transparent-chairs-new-sofa-210870549.webp';
import image3 from '../assets/womans-hand-is-holding-colorful-paper-shopping-bags-style-dark-cyan-amber_921860-108369.avif';
import Footer from '../components/Footer';

const Layout = () => {

  const { womenProducts, beautyProducts, homeProducts, kitchenProducts } = useContext(CartContext);


  return (
    <div className='home_page'>
      <div className="header">
        <NavbarJsx />
      </div>
      <div className="hero">
        <Carousel fade>
          <Carousel.Item>
            <img className='hero_img' src={image1} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='hero_img' src={image2} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className='hero_img' src={image3} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="productSection">
        <h1>Beauty</h1>
        <div className="product_container">
          {beautyProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/beauty" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1>Women</h1>
        <div className="product_container">
          {womenProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/women" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1>Home Decorate</h1>
        <div className="product_container">
          {homeProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/home_decorate" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
      <div className="productSection">
        <h1>Kitchen</h1>
        <div className="product_container">
          {kitchenProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/home_decorate" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
      <div className="category_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
