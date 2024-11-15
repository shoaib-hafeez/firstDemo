import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AppContext } from '../context/context';
import useCartTotal from '../hooks/useCartTotal';


const Navbarjsx = () => {
    

    const { cartItems } = useContext(CartContext)
    const { setLoggedInUser, logout, fullName, setFullName } = useContext(AppContext)
    const { total } = useCartTotal();


    const storedUser = JSON.parse(localStorage.getItem('signedUpUser'));
    const username = storedUser.fullName;


    const [userName, setUserName] = useState('');
    useEffect(() => {
        const storedUserName = localStorage.getItem('signedUpUser');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbarjsx   ">
            <Container container-fluid>
                <Navbar.Brand  >  <Link to={'/Layout'} className='logo'> <p><span>O</span>nline<span>S</span>tore</p> </Link> </Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle style={{backgroundColor:'darkcyan', padding:'5px 15px'}} id="dropdown-basic">
                        Categories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item >   <Nav.Link as={Link} to='/Mens'>Men</Nav.Link></Dropdown.Item>
                        <Dropdown.Item >   <Nav.Link as={Link} to='/Womens'>Women</Nav.Link></Dropdown.Item>
                        <Dropdown.Item >   <Nav.Link as={Link} to='/HomeDecorate'>HomeDecorate</Nav.Link></Dropdown.Item>
                       
                    </Dropdown.Menu>
                </Dropdown>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link as={Link} to='/category/beauty'>Beauty</Nav.Link>
                        <Nav.Link as={Link} to='/category/home-decoration'>HomeDecor</Nav.Link>
                        <Nav.Link as={Link} to='/category/womens-dresses'>Women</Nav.Link>
                        <Nav.Link as={Link} to='/category/kitchen-accessories'>Kitchen</Nav.Link>

                    </Nav>

                    <Link to={'/CartTable'} className='cartLink'>
                        <h5 style={{ padding: "0px 20px" }}>
                            cart <sup className='sup_count'>{cartItems.length}</sup> <br />
                            <span style={{ color: 'black', fontSize: '15px' }}>
                                TotalCost <span style={{ backgroundColor: 'black', color: 'white', padding: '0px 5px ', borderRadius: '10px' }}>
                                    Rs.{total}</span></span>
                        </h5>

                    </Link>

                    {username ? (
                        <Dropdown as={ButtonGroup}>
                            <Button style={{ backgroundColor: 'darkcyan' }}>{username}</Button>
                            <Dropdown.Toggle split style={{ backgroundColor: 'white', color: 'black' }} id="dropdown-split-basic" />

                            <Dropdown.Menu className='drop_logout' >
                                <Dropdown.Item onClick={logout}   >
                                    <Link to={'/LoginForm'} className='logout'>Logout</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (

                        <Button variant="success">
                            <Link to={'/LoginForm'} style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
                        </Button>
                    )}



                </Navbar.Collapse>


            </Container>
        </Navbar>
    );
};

export default Navbarjsx;
