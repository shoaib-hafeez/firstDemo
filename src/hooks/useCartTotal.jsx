import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartTotal = () => {


    const {cartItems}= useContext(CartContext);

    const total =cartItems.reduce((totals , item)=>{
        return Math.round(totals+ item.price *item.quantity)
    }, 0 );

    return {
        total
    }
 }

export default useCartTotal;