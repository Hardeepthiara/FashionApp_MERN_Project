// Cart.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import axios from 'axios';
import CartItem from '../components/CartItem';

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
          console.log(response.data.ordersWithProducts);
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
  }, [isLoggedIn]); // Remove setCartTotal from the dependency array
  
  // Display loading message while fetching data
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
                {/* <Link className="brdcrm_2" to={`/products/${product.category}`}>
                  {product.category}
                </Link> */}
                <span>            
                    Cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop-cart spad">
        <div className="container" id="is_cart">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop__cart__table">
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordersWithProducts.map((item) => (
                      <CartItem 
                        key={item.order_id} {...item} 
                        onRemove={handleRemoveItem}

                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn">
                <Link to="/">
                  <i className="fas fa-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
              <div className="cart__btn">
                <Link to="/checkout">Proceed to Checkout <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
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

