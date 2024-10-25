import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppProvider from './context/context.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <AppProvider>

    <CartProvider>

    <App />

    </CartProvider>

    </AppProvider>
  </StrictMode>,
)