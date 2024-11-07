import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbarjsx from '../components/Navbar';
import ProCard from '../components/ProductCard';
// import heroImg from "../../assets/"
import heroImg from "../assets/depositphotos_547621056-stock-illustration-women-fashion-clothes-isolated-white.jpg";

const WomensLayout = () => {

    const [beautyProducts, setBeautyProducts] = useState([]);
    const [watchesProducts, setWatchesProducts] = useState([]);
    const [dressProducts, setDressProducts] = useState([]);
    const [shoesProducts, setShoesProducts] = useState([]);
    const [skinProducts, setSkinProducts] = useState([]);
    const [jewelleryProducts, setJewelleryProducts] = useState([]);


    useEffect(() => {


        fetch('https://dummyjson.com/products/category/womens-dresses')
            .then((res) => res.json())
            .then((json) => setDressProducts(json.products.slice(0, 4)));

        fetch('https://dummyjson.com/products/category/womens-watches')
            .then((res) => res.json())
            .then((json) => setWatchesProducts(json.products.slice(0, 4)));

        fetch('https://dummyjson.com/products/category/womens-jewellery')
            .then((res) => res.json())
            .then((json) => setJewelleryProducts(json.products.slice(0, 4)));

        fetch('https://dummyjson.com/products/category/womens-shoes')
            .then((res) => res.json())
            .then((json) => setShoesProducts(json.products.slice(0, 4)));


        fetch('https://dummyjson.com/products/category/skin-care')
            .then((res) => res.json())
            .then((json) => setSkinProducts(json.products.slice(0, 4)));
        fetch('https://dummyjson.com/products/category/beauty')
            .then((res) => res.json())
            .then((json) => setBeautyProducts(json.products.slice(0, 4)));


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
                <h1 style={{ textAlign: 'center' }}>Womens Shoes</h1>
                <br />
                <div className="product_container">
                    {shoesProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/womens-shoes" className='seeMoreAction'>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            </div>
            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>Womens Watches</h1>
                <br />
                <div className="product_container">
                    {watchesProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/womens-watches" className='seeMoreAction'>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            </div>
            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>Women dresses</h1>
                <br />
                <div className="product_container">
                    {dressProducts.map((product, ind) => (
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
                <h1 style={{ textAlign: 'center' }}>Womens Jewellery</h1>
                <br />
                <div className="product_container">
                    {jewelleryProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/womens-jewellery" className='seeMoreAction'>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            </div>
            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>Skin Care</h1>
                <br />
                <div className="product_container">
                    {skinProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/skin-care" className='seeMoreAction'>
                        <button className="see-more-btn">See More</button>
                    </Link>
                </div>
            </div>
            <div className="productSection">
                <h1 style={{ textAlign: 'center' }}>Beauty</h1>
                <br />
                <div className="product_container">
                    {beautyProducts.map((product, ind) => (
                        <ProCard product={product} key={ind} />
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/category/skin-care" className='seeMoreAction'>
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
