import { createContext } from "react";
import { useState , useEffect} from "react";


export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);
    const [productDetails, setProductDetails] = useState({})
    const [showQuantityControls, setShowQuantityControls] = useState(false);
    const [beautyProducts, setBeautyProducts] = useState([]);
    const [skincareProducts, setSkincareProducts] = useState([]);
    const [homeProducts, setHomeProducts] = useState([]);
    const [kitchenProducts, setKitchenProducts] = useState([]);
    

    useEffect(() => {

        fetch('https://dummyjson.com/products/category/beauty')
          .then((res) => res.json())
          .then((json) => setBeautyProducts(json.products.slice(0, 4)));
    
        fetch('https://dummyjson.com/products/category/skin-care')
          .then((res) => res.json())
          .then((json) => setSkincareProducts(json.products.slice(0, 4)));
    
        fetch('https://dummyjson.com/products/category/home-decoration')
          .then((res) => res.json())
          .then((json) => setHomeProducts(json.products.slice(0, 4)));

        fetch('https://dummyjson.com/products/category/kitchen-accessories')
          .then((res) => res.json())
          .then((json) => setKitchenProducts(json.products.slice(0, 4)));
      }, []);
    


    const increment = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item
            ).filter(item => item.quantity > 0) 
        );
    };



    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            setCartItems(cartItems.map((item) =>
                item.id === product.id ? { ...item } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };
    const removeToCart = (productId) => {

        setCartItems(cartItems.filter((item) => item.id !== productId));

    }

    const clearCart = ()=>{
        setCartItems([])
    }

    return (<CartContext.Provider
        value={{
            cartItems, addToCart,
            removeToCart,
            increment, decrement,
            productDetails,
            setProductDetails,
            showQuantityControls,
            setShowQuantityControls,
            clearCart , 
            beautyProducts, setBeautyProducts,
            skincareProducts, setSkincareProducts,
            homeProducts, setHomeProducts,
            kitchenProducts , setKitchenProducts,


        }}>

        {children}
    </CartContext.Provider>
    )

}
export { CartProvider }