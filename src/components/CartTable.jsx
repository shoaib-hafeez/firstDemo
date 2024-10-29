import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/CartContext';
import NavbarJsx from './Navbar';
import Footer from './Footer';
import { MdDeleteForever } from "react-icons/md";
import useCartTotal from '../hooks/useCartTotal';
import { Link } from 'react-router-dom';

const CartTable = () => {
    const { cartItems, removeToCart, decrement, increment } = useContext(CartContext);
    const { total } = useCartTotal();

    const handleDecrement = (id, quantity) => {
        if (quantity === 1) {
            removeToCart(id);
        } else {
            decrement(id);
        }
    };

    return (
        <div className='cartTable_jsx'>
            <NavbarJsx />

            <div className="cartTable">
                <h2>Shopping Cart</h2>
                {cartItems.length > 0 ? (
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        <button className='tableMinusBtn' onClick={() => handleDecrement(item.id, item.quantity)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='tablePlusBtn' onClick={() => increment(item.id)}>+</button>
                                    </td>
                                    <td>{Math.ceil(item.price)}</td>
                                    <td>{Math.ceil(item.price * item.quantity)}</td>
                                    <td>
                                        <MdDeleteForever onClick={() => removeToCart(item.id)} className='tableDeleteButton' />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total:</td>
                                <td style={{ fontWeight: 'bold' }}>Rs.{total}</td>
                                <td>
                                    <Link to={'/UserDetails'} >
                                        <button className='checkoutBtn'>Checkout</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                ) : (
                  

                    <p style={{textAlign:'center',marginTop:'90px', fontWeight:'700', color:'darkcyan', fontSize:'22px'}}>Your cart is empty</p>
                    
                )}
            </div>
            <br /><br />
        </div>
    );
};

export default CartTable;
