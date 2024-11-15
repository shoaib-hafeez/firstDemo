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
import axios from 'axios';

// import { FaMale } from "react-icons/fa";
// import { TbMoodKid } from "react-icons/tb";
// import { GrRestroomWomen } from "react-icons/gr";
// import { TbScreenShare } from "react-icons/tb";
// import { FaCar } from "react-icons/fa";
const Layout = () => {

  const [beautyProducts, setBeautyProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [kitchenProducts, setKitchenProducts] = useState([]);
  const [menShirtsProducts, setMenShirtsProducts] = useState([]);
  const [productError, setProductError] = useState({})


  useEffect(() => {

    // fetch('https://dummyjson.com/products/category/beauty')   //yeh simple fetch karny ka tareqa h 
    //   .then((res) => res.json())   // is line m response m data aaraha h or phr responsw ko json m cnvrt kia jaaha h 
    //   .then((json) => setBeautyProducts(json.products.slice(0, 4)));


    // axios: axios api ko json m hi return karta h 
    axios.get('https://dummyjson.com/products/category/beauty')
      .then(response =>  setBeautyProducts(response.data.products.slice(0, 4)))
      .catch(error => setProductError.error("Product Not Found:", error));
         
    axios.get('https://dummyjson.com/products/category/womens-dresses')
    .then(response => setWomenProducts(response.data.products.slice(0, 4)))
    .catch(error => setProductError.error("Product Not found:", error));

    axios.get('https://dummyjson.com/products/category/home-decoration')
    .then((response)=> setHomeProducts (response.data.products.slice(0,4)))
    .catch(error => setProductError.error("Product Not found: ", error))

    axios.get('https://dummyjson.com/products/category/kitchen-accessories')
    .then(response => setKitchenProducts(response.data.products.slice(0,4)))
    .catch(error=> setProductError.error('Products Not Found:', error))

    axios.get('https://dummyjson.com/products/category/mens-shirts')
    .then(response=> setMenShirtsProducts(response.data.products.slice(0 ,4)))
    .catch(error => setProductError('products Not Found',error))
  }, []);



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
      {/* <h3 style={{textAlign:'center'}}>Shop By Category</h3> <br /> */}
      {/* <div className="shopCategory_cotainer">
        
      <Link to="/category/womens-dresses" className='seeMoreAction'>
        <div className="shopCategory">
        <span><FaMale /></span>
         <h4>Mens</h4>
        </div>
      </Link>

        <div className="shopCategory">
        <span><GrRestroomWomen  /></span>
        <h4>Womens</h4>
        </div>

        <div className="shopCategory">
        <span><TbMoodKid /></span>
        <h4>Kids</h4>
        </div>

        <div className="shopCategory">
        <span><TbScreenShare /></span>
        <h4>Electronics</h4>
        </div>

        <div className="shopCategory">
        <span><FaCar /></span>
        <h4>Vhicle</h4>
        </div>
      </div> */}

      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Beauty</h1>
        <br />
        <div className="product_container">
          {beautyProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/beauty" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Women</h1>
        <br />
        <div className="product_container">
          {womenProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/womens-dresses" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Home Decorate</h1>
        <br />
        <div className="product_container">
          {homeProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/home_decorate" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Kitchen</h1>
        <br />
        <div className="product_container">
          {kitchenProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/kitchen-accessories" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Mens Shirt</h1>
        <br />
        <div className="product_container">
          {menShirtsProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/mens-shirts" className='seeMoreAction'>
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
