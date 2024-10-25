import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartTotal = () => {


    const {cartItems}= useContext(CartContext);

    const total = cartItems.reduce((total, item) => {
        return Math.ceil(total + item.price * item.quantity);
      }, 0);
 
    return {
        total
    }
}

export default useCartTotal;