import React, { useEffect, useState } from 'react'
import NavbarJsx from './Navbar';
import ProCard from '../components/ProductCard';
import Footer from './Footer';
import beauty from "../assets/zarla-makeup-logos-4096x2731-20211110.webp"

const Beauty = () => {


  const [beautyProducts, setBeautyProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/beauty')
      .then((res) => res.json())
      .then((json) => setBeautyProducts(json.products));
  })
  return (
    <div className="category_main">
      <div className="header">

        <NavbarJsx />
      </div>
      <div className="category">
        <img src={beauty} className='category_hero' alt="image" />

      </div>
      <br />

      <div className='productSection'>
        <div className="category_headings">

          <h1>Beauty</h1>
          <br />
        </div>
        <div className='product_container'>

          {beautyProducts.map((product, ind) => (
            <ProCard product={product} key={ind} />
          ))}

        </div>
      </div>
      <br />
      <div className="category_footer">
        <Footer />
      </div>
    </div>
  )
}

export default Beauty