import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbarjsx from '../components/Navbar';
import ProCard from '../components/ProductCard';

import heroImg from "../assets/QLCS-10507_QSRS_Marketplace-HCP-Updates_Mobile_768x300_Men_V1.jpg"

const MensLayout = () => {

  

  const [shirtProducts, setShirtProducts] = useState([]);
  const [shoesProducts, setShoesProducts] = useState([]);
  const [watchesProducts, setWatchesProducts] = useState([]);
  const [fragancesProducts, setFragrancesProducts] = useState([]);



  useEffect(() => {


    fetch('https://dummyjson.com/products/category/mens-shirts')
      .then((res) => res.json())
      .then((json) => setShirtProducts(json.products.slice(0, 4)));

    fetch('https://dummyjson.com/products/category/mens-shoes')
      .then((res) => res.json())
      .then((json) => setShoesProducts(json.products.slice(0, 4)));

    fetch('https://dummyjson.com/products/category/mens-watches')
      .then((res) => res.json())
      .then((json) => setWatchesProducts(json.products.slice(0, 4)));

    fetch('https://dummyjson.com/products/category/fragrances')
      .then((res) => res.json())
      .then((json) => setFragrancesProducts(json.products.slice(0, 4)));


  }, []);



  return (
    <div className='home_page'>
      <div className="header">
        <Navbarjsx/>
      </div>
      <div className="Menshero">
        <img style={{width:'100%', height:'100%'}} src={heroImg} alt="image" />
      </div> 
      <br />


      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Mens Shirt</h1>
        <br />
        <div className="product_container">
          {shirtProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/mens-shirts" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Mens Shoes</h1>
        <br />
        <div className="product_container">
          {shoesProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/mens-shoes" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>

      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Mens watches</h1>
        <br />
        <div className="product_container">
          {watchesProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/mens-watches" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
      <div className="productSection">
        <h1 style={{ textAlign: 'center' }}>Perfumes</h1>
        <br />
        <div className="product_container">
          {fragancesProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Link to="/category/fragrances" className='seeMoreAction'>
            <button className="see-more-btn">See More</button>
          </Link>
        </div>
      </div>
     
      <div className="category_footer">
        <Footer/>
      </div>
    </div>
  );
};

export default MensLayout;
