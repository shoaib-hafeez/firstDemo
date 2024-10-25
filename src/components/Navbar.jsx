import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import { CartContext } from '../context/CartContext';
import { AppContext } from '../context/context';
import useCartTotal from '../hooks/useCartTotal';


const NavbarJsx = () => {

  const {cartItems  }= useContext(CartContext)
  const {setLoggedInUser , logout, fullName , setFullName }= useContext(AppContext)
  const {total}  = useCartTotal();

  
  const storedUser = JSON.parse(localStorage.getItem('signedUpUser'));
  const username = storedUser.fullName;

  
    const [userName, setUserName] = useState(''); 
    useEffect(() => {
        const storedUserName = localStorage.getItem('signedUpUser'); 
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    // const logout = () => {
    //     setLoggedInUser(null);
    //     localStorage.removeItem('loggedInUser'); 
    //   };

    return (
        <Navbar expand="lg" className="bg-body-tertiary navbarjsx   ">
            <Container container-fluid>
                <Navbar.Brand  >  <Link to={'/Layout'} className='logo'> <p><span>O</span>nline<span>S</span>tore</p> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'  }}
                        navbarScroll
                    >
                         <Nav.Link as={Link} to='/Mens' >Mens</Nav.Link>
                        <Nav.Link as={Link} to='/Womens'>Womens</Nav.Link>
                        <Nav.Link as={Link} to='/Kids'>Kids</Nav.Link>
                    </Nav>
                   {/* <h5>TotalCost <span style={{backgroundColor:'black', color:'white', padding:'0px 5px ', borderRadius:'10px'}}>Rs.{total}</span></h5> */}
                   <Link to={'/CartTable'} className='cartLink'>
                   <h5 style={{padding:"0px 20px"}}>
                   cart <sup className='sup_count'>{cartItems.length}</sup> <br /> 
                   <span style={{color:'black' ,fontSize:'15px'}}>TotalCost <span style={{backgroundColor:'black', color:'white', padding:'0px 5px ', borderRadius:'10px'}}>Rs.{total}</span></span>
                   </h5> 
                   
                   </Link> 
                    
                    {username ? (
                        <Dropdown as={ButtonGroup}>
                            <Button style={{backgroundColor:'darkcyan'}}>{username}</Button> 
                            <Dropdown.Toggle split style={{backgroundColor:'white' , color:'black'}} id="dropdown-split-basic" />

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

export default NavbarJsx;
