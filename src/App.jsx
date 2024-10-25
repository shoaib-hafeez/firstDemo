import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Kids from './components/Kids';
import ProductDetails from './components/ProductDetails';
import CartTable from './components/CartTable';
import UserDetails from './components/cart/UserDetails';
import Thankyou from './components/cart/Thankyou';


function App() {
  const router = createBrowserRouter([
    {
      path: "/Layout",
      element: <Layout/>,
    },
    {
      path: "/",
      element: <SignupForm/>,
    },
    {
      path: "/LoginForm",
      element: <LoginForm/>,
    },
    {
      path: "/Mens",
      element: <Mens/>,
    },
    {
      path: "/Womens",
      element: <Womens/>,
    },
    {
      path: "/Kids",
      element: <Kids/>,
    },
    {
      path: "/ProductDetails/:id",
      element: <ProductDetails/>,
    },
    {
      path: "/CartTable",
      element: <CartTable/>,
    },
    
    {
      path: "/UserDetails",
      element: <UserDetails/>,
    },
    {
      path: "/Thankyou",
      element: <Thankyou/>,
    },
    
    
  ]);
   

  return (
    <>
  
<RouterProvider router={router} />
      
    </>
  )
}

export default App
