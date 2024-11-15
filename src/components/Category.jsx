import React, { useEffect, useState } from 'react';
import NavbarJsx from './Navbar';
import ProCard from './ProductCard';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Category = () => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);

        setTimeout(() => {
          setCategoryProducts(res.data.products);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="category_main">
      <NavbarJsx />
      <br />
      <div className="category-heading">
        <h1 style={{ textAlign: 'center' }}>
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </h1>
      </div>
      <br />

      {loading ? (
        <div className="loader" style={{ textAlign: 'center' }}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className='productSection'>
          <div className='product_container'>
            {categoryProducts.length > 0 ? (
              categoryProducts.map((product, ind) => (
                <ProCard product={product} key={ind} />
              ))
            ) : (
              <div className="noProduct">

                <h2 style={{ textAlign: 'center', color:'red',paddingTop:'100px'}}>No products found</h2>
              </div>
            )}
          </div>
        </div>
      )}

      <br /><br />
      <Footer />
    </div>
  );
};

export default Category;
