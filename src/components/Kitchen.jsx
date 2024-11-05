import React, { useEffect, useState } from 'react'
import NavbarJsx from './Navbar';
import ProCard from '../components/ProductCard';
import Footer from './Footer';
import kitchen from "../assets/23503584351c247b458384420f6621a2.jpg"

const Kitchen = () => {


    const [kitchenProducts, setKitchenProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/kitchen-accessories')
            .then((res) => res.json())
            .then((json) => setKitchenProducts(json.products));
    })
    return (
        <div className="category_main">
            <div className="header">

                <NavbarJsx />
            </div>
            <br />
            <div className="category">
                <img src={kitchen} className='category_hero' alt="image" />

            </div>
            <br />

            <div className='productSection'>
                <div className="category_headings">

                <h1>Kitchen</h1>
                </div>
                <br />
                <div className='product_container'>

                    {kitchenProducts.map((product, ind) => (
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

export default Kitchen