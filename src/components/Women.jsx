import React, { useEffect, useState } from 'react'
import NavbarJsx from './Navbar';
import ProCard from './ProductCard';
import Footer from './Footer';
import women from "../assets/womans-hand-is-holding-colorful-paper-shopping-bags-style-dark-cyan-amber_921860-108369.avif"

const Women = () => {


  const [womenProducts, setWomenProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/womens-dresses')
      .then((res) => res.json())
      .then((json) => setWomenProducts(json.products));
  })
  return (
    <div className="category_main">
      <div className="header">

      <NavbarJsx />
      </div>
      <div className="category">
        <img src={women} className='category_hero' alt="image" />

      </div>


      <div className='productSection'>
        <br />
          <div className="category_headings">

        <h1>Women</h1>
          </div>
          <br />
        <div className='product_container'>

          {womenProducts.map((product, ind) => (
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

export default Women