import React, { useContext, useEffect ,useState} from 'react';
import NavbarJsx from '../components/Navbar';
import { AppContext } from '../context/context';
import ProCard from '../components/ProductCard';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/shop-online.jpg'
import image2 from '../assets/Edenrobe-Haute-Summer-Collections-2022.jpeg'
import image3 from '../assets/2.webp'
import Footer from '../components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FaSearch } from "react-icons/fa";


const Layout = () => {
  const { products, setProducts } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, [setProducts]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => res.json())
        .then((json) => setProducts(json.products));
    } else {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => setProducts(json.products));
    }
  }, [searchQuery, setProducts]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  


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
      <div className="searchBar">
        <Form inline>
          <Row>
            <Col style={{ width: '300px', borderRadius: '10px' }}>
              <Form.Control
              style={{border:'2px solid darkcyan'}}
                type="text"
                placeholder="Search Here"
                value={searchQuery}
                onChange={handleSearchChange}
                className="mr-sm-2"
              />
            </Col>
          </Row>
        </Form>
      </div>
      <div className="productHeading">
        <h1> Our Products</h1>
      </div>


      <div className="product_container">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, ind) => {
            return <ProCard product={product} key={ind} />;
          })
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      <br /><br /><br /> <br />

      <Footer />
    </div>
  );
};

export default Layout;
