import { useState } from 'react'
import './App.css'
import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from './components/Login';
import SignupForm from './components/Signup';
import Category from './components/Category';
// import HomeDecorate from './components/HomeDecorate';
// import Women from './components/Women';
// import Kitchen from './components/Kitchen';
import ProductDetails from './components/ProductDetails';
import CartTable from './components/CartTable';
import UserDetails from './components/cart/UserDetails';
import Thankyou from './components/cart/Thankyou';
import MensLayout from './Category/MensLayout';
import WomensLayout from './Category/WomensLayout';
import HouseLayout from './Category/Houselayout'


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
      path: "/category/:categoryName",
      element: <Category/>,
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
    {
      path: "/MensLayout",
      element: <MensLayout/>,
    },
    {
      path: "/Category/:page",
      element: <ProductDetails/>,
    },
    {
      path: "/WomensLayout",
      element: <WomensLayout/>,
    },
    {
      path: "/HouseLayout",
      element: <HouseLayout/>,
    },
   
    
    
  ]);
   

  return (
    <>
  
<RouterProvider router={router} />
      
    </>
  )
}

export default App
