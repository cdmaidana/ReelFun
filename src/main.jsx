import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
//import CartProvider from './providers/CartProvider.jsx';
import CartContextProvider from './providers/CartContextProvider.jsx';
import { UserContextProvider } from './providers/UserContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <CartProvider>
      <App />
    </CartProvider> */}
    <UserContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider> 
    </UserContextProvider>
  </BrowserRouter>,
)
