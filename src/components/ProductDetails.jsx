import React, { useEffect, useContext } from 'react';
import NavbarJsx from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router';
import { CartContext } from '../context/CartContext';
import { MdDeleteForever } from "react-icons/md";  // Delete icon

const ProductDetails = () => {
    const { id } = useParams();
    const { increment, decrement, cartItems, addToCart, removeFromCart, setProductDetails, productDetails } = useContext(CartContext);

    // Check if the product is in the cart
    const productInCart = cartItems.find(item => item.id === +id);
    const productQuantity = productInCart?.quantity || 0; // Get product quantity, default to 0 if not in cart

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProductDetails(json));
    }, [id]);

    return (
        <div className='product_details_jsx'>
            <NavbarJsx />
            <br /><br />
            <section className="details_main_container">
                <div className="detail_sec">
                    <div className="details_img_sec">
                        <img className='detailsProductImage' src={productDetails.images && productDetails.images[0]} alt={productDetails.title} />
                    </div>

                    <div className="details_content">
                        <div className="details_heading_content">
                            <div className="details_icons">
                                <div className="d_heading">
                                    <h2>{productDetails.title}</h2>
                                </div>
                            </div>
                        </div>
                        <p>{productDetails.category}</p>
                        <h2 className="d_price">RS. {productDetails.price}</h2>
                        <h2>Description</h2>
                        <p>{productDetails.description}</p>
                        <br />
                        <hr />
                        <br />
                        
                        <div className="d_buttons">
                            {productQuantity === 0 ? (
                                <div className="cart_button">
                                    <button onClick={() => addToCart(productDetails)}>Add to Cart</button>
                                </div>
                            ) : (
                                <div className="d_quantity">
                                    {productQuantity > 0 ? (
                                        <>
                                            <b>Qty = </b>
                                            <span onClick={() => decrement(productDetails.id)}>-</span>
                                            <label>{productQuantity}</label>
                                            <span className="d_plus" onClick={() => increment(productDetails.id)}>+</span>
                                        </>
                                    ) : (
                                        <span className="d_delete">
                                            <MdDeleteForever onClick={() => removeFromCart(productDetails.id)} className='tableDeleteButton' />
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        <br />
                        <div className="d_shoping">
                            <span><i className="fa-solid fa-truck-fast"></i></span>
                            <div className="d_heading">
                                <h3>Shipping</h3>
                                <p className="d_shipping">
                                    Enter Your Postal For Delivery Availability
                                </p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            <Footer />
        </div>
    );
};

export default ProductDetails;
