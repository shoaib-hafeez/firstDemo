import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarJsx from '../components/Navbar';
import { CartContext } from '../context/CartContext';
import ProCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/shop-online.jpg';
import image2 from '../assets/Edenrobe-Haute-Summer-Collections-2022.jpeg';
import image3 from '../assets/2.webp';
import Footer from '../components/Footer';

const Layout = () => {

  const { skincareProducts, beautyProducts, homeProducts , kitchenProducts } = useContext(CartContext);

console.log(kitchenProducts)
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
        <h1>Skincare</h1>
        <div className="product_container">
          {skincareProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/skinCare" className='seeMoreAction'>
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
