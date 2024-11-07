import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbarjsx from '../components/Navbar';
import ProCard from '../components/ProductCard';
import heroImg from "../assets/banner_5.1.webp";


const WomensLayout = () => {

    const [furnitureProducts, setFurnitureProducts] = useState([]);
    const [kitchenProducts, setKitchenProducts] = useState([]);



    useEffect(() => {


        fetch('https://dummyjson.com/products/category/furniture')
            .then((res) => res.json())
            .then((json) => setFurnitureProducts(json.products.slice(0, 4)));

        fetch('https://dummyjson.com/products/category/kitchen-accessories')
            .then((res) => res.json())
            .then((json) => setKitchenProducts(json.products.slice(0, 4)));



    }, []);



    return (
        <div className='home_page'>
            <div className="header">
                <Navbarjsx />
            </div>
            <div className="Menshero">
                <img style={{ width: '100%', height: '100%' }} src={heroImg} alt="image" />
            </div>
            <br />




            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>Furniture</h1>
                <br />
                <div className="product_container">
                    {furnitureProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/furniture" className='seeMoreAction'>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            </div>
            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>kitchen Accessories</h1>
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
          

            <div className="category_footer">
                <Footer />
            </div>
        </div>
    );
};

export default WomensLayout;
