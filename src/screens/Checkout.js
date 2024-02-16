// Cart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import axios from 'axios';

const Cart = () => {
  const [ordersWithProducts, setOrdersWithProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isLoggedIn = sessionStorage.getItem('userId');
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchOrdersWithProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/orders-with-products/${isLoggedIn}`);

        if (response.data.success) {
          setOrdersWithProducts(response.data.ordersWithProducts);
          let total = 0;

          response.data.ordersWithProducts.forEach(element => {
            total += element.product_details.price * element.quantity;
          });

          setCartTotal(total);
        } else {
          console.error('Failed to fetch orders with products:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching orders with products:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrdersWithProducts();
  }, [isLoggedIn]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleRemoveItem = (orderId) => {
    setOrdersWithProducts((prevOrders) =>
      prevOrders.filter((item) => item.order_id !== orderId)
    );
  };

  var deliveryFee = cartTotal > 100 ? 0 : 5;
  var tax = (cartTotal * 0.13);
  var grandTotal = (cartTotal + deliveryFee + tax).toFixed(2);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <Link className="brdcrm_2" to="/cart">
                  Cart
                </Link>
                <span>            
                    Checkout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-cart spad">
        <div className="container" id="is_cart">
          <div className="row">

            {/* Left side for payment and address */}
            <div className="col-lg-6 col-md-6 col-sm-6 cart__total__procced">
            {/* Payment Options */}
            <div className="payment-options border p-3">
                <h6 className="mb-3">Payment Options</h6>
                {/* Add your payment options or components here */}
                <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentOption" id="paymentOption1" />
                <label className="form-check-label" htmlFor="paymentOption1">
                    Payment Option 1
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="paymentOption" id="paymentOption2" />
                <label className="form-check-label" htmlFor="paymentOption2">
                    Payment Option 2
                </label>
                </div>
            </div>

            {/* Address Section */}
            <div className="address-section border p-3 mt-3">
                <h6 className="mb-3">Shipping Address</h6>
                {/* Add your address input fields or components here */}
                <form>
                <div className="mb-3">
                    <label htmlFor="streetAddress" className="form-label">
                    Street Address
                    </label>
                    <input   style={{ boxShadow: '#9c3030 0px 4px 8px' }} type="text" className="form-control" id="streetAddress" placeholder="Enter your street address" />
                </div>
                {/* Add more address fields as needed */}
                </form>
            </div>
            </div>

      
            <div className="col-lg-4 offset-lg-2">
              {/* Cart Total Section */}
              <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>Subtotal <span id="subtotal">$ {cartTotal.toFixed(2)}</span></li>
                  <li>Tax(13%) <span id="tax">$ {tax.toFixed(2)}</span></li>
                  <li>Delivery Fee <span id="delivery-fee">$ {deliveryFee.toFixed(2)}</span></li>
                  <li>Total <span id="total">$ {grandTotal}</span></li>
                </ul>
                <a href="/checkout" className="primary-btn">
                  Place Order
                </a>
              </div>
            </div>
          </div>
          <div className="cart__btn mt-5" >
            <Link to="/cart">
                <i className="fas fa-arrow-left"></i> Back
            </Link>
        </div>
        </div>
        
      </section>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Cart;
