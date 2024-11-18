import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = (props) => {
  const product = props.product;
  const { addToCart, increment, decrement, removeToCart, cartItems } = useContext(CartContext); 
  const [addButton, setAddbutton] = useState(false);

  const cartItem = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    setAddbutton(true);
  };


  const handleDecrement = () => {
    if (cartItem.quantity === 1) {

      removeToCart(product.id);
      setAddbutton(false);
    } else {
      decrement(product.id);
    }
  };

  return (
    <Card className='productCard' key={product.id}>
      <Link to={`/ProductDetails/${product.id}`} className='details_card'>
        <div className="card_image">
          <Card.Img className='productImage' variant="top" src={product.images[0]} alt={product.title} />
        </div>
        <Card.Title>
          <p className='card_title'>{product.title}</p>
        </Card.Title>
      </Link>
      <Card.Body>
        <Card.Text style={{ fontWeight: '700', color: 'red', fontSize: '20px' }}>
          Rs. {product.price} <br />

          <div className="btns" style={{ display: 'flex', gap: '5px' }}>

            {!addButton && !cartItem && (
              <Button onClick={handleAddToCart} className='addtocartBtn'>
                Add to cart
              </Button>
            )}

            {(addButton || cartItem) && (
              <div className="quantity-controls" style={{ alignItems: 'center', display: 'flex' }}>
                <span style={{ color: 'black' }}>Qty = </span>
                {cartItem?.quantity > 0 && (
                  <>
                    <button className='cardMinusBtn' onClick={handleDecrement}>-</button>
                    <span style={{ margin: '0 5px', color: 'black' }}>{cartItem.quantity}</span>
                    <button className='cardPlusBtn' onClick={() => increment(product.id)}>+</button>
                  </>
                )}
              </div>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
