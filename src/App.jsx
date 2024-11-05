import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import Beauty from './components/Beauty';
import HomeDecorate from './components/HomeDecorate';
import SkinCare from './components/SkinCare';
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
      path: "/Beauty",
      element: <Beauty/>,
    },
    {
      path: "/home_decorate",
      element: <HomeDecorate/>,
    },
    {
      path: "/SkinCare",
      element: <SkinCare/>,
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
