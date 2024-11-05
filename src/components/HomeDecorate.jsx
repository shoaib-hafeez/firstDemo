import React, { useEffect, useState } from 'react'
import NavbarJsx from './Navbar';
import ProCard from './ProductCard';
import Footer from './Footer';
import homeimage from "../assets/stylish-living-room-table-panorama-dark-cyan-color-wall-molding-modern-dining-transparent-chairs-new-sofa-210870549.webp"

const HomeDecorate = () => {


  const [homeProducts, setHomeProducts] = useState([])



  useEffect(() => {
    fetch('https://dummyjson.com/products/category/home-decoration')
      .then((res) => res.json())
      .then((json) => setHomeProducts(json.products));
  })
  return (
    <div className="category_main">
      <div className="header">

      <NavbarJsx />
      </div>
      <div className="category">
        <img src={homeimage} className='category_hero' alt="image" />

      </div>
      <br />


      <div className='productSection'>
          <div className="category_headings">

        <h1>Home decoration</h1>
          </div>
          <br />
        <div className='product_container'>

          {homeProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}

        </div>
      </div>
      <br />
    <div className="category_footer">
    <Footer/>
    </div>
    </div>
  )
}



export default HomeDecorate