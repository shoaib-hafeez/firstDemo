import React, { useEffect, useState } from 'react'
import NavbarJsx from './Navbar';
import ProCard from '../components/ProductCard';
import Footer from './Footer';

const SkinCare = () => {


  const [SkincareProducts, setSkincareProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/skin-care')
      .then((res) => res.json())
      .then((json) => setSkincareProducts(json.products));
  })
  return (
    <div className="category_main">
      <div className="header">

      <NavbarJsx />
      </div>
      <br />


      <div className='productSection'>
          {/* <div className="category_headings"> */}

        <h1>SkinCare</h1>
          {/* </div> */}
        <div className='product_container'>

          {SkincareProducts.map((product, ind) => (
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

export default SkinCare