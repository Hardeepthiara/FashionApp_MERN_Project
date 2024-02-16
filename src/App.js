import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Products from './screens/Products';
import ProductDetail from './screens/ProductDetails';
import Cart from './screens/cart';
import ContactForm from './screens/ContactForm';
import Checkout from './screens/Checkout';

import 'sweetalert2/dist/sweetalert2.min.css';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/product-details/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactForm />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
