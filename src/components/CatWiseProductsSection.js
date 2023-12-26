import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../css/style.css';

const CatWiseProductsSection = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const isLoggedIn = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchProducts();
  }, [location.pathname]);



  const addToCart = async (product) => {
    try {
      // Check if the user is logged in
      if (!isLoggedIn) {
        Swal.fire({
          icon: 'warning',
          title: 'Login Required',
          text: 'Please log in to add items to the cart.',
          showConfirmButton: false,
          timer: 1000
        });
        return; // Stop execution if the user is not logged in
      }

      const response = await axios.post('http://localhost:4000/api/cart/add', {
        userId: isLoggedIn,
        productId: product.id,
        quantity: 1,
      });
  
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Product added to cart successfully',
          showConfirmButton: false,
          timer: 1000
        });

      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Duplicate Item!',
          text: response.data.message,
          showConfirmButton: false,
          timer: 1000
        });
  
        console.error('Failed to add product to cart:', response.data.message);
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error adding product to cart',
        showConfirmButton: false,
        timer: 1000
      });
  
      console.error('Error adding product to cart:', error.message);
    }
  };
  
  const getCategoryFromPath = () => {
    const parts = location.pathname.split('/');
    if (parts.length >= 3) {
      return parts[2]; // Assuming the category is the third part of the path
    }
    return '*'; // Default to '*' if category is not found
  };

  const selectedCategory = getCategoryFromPath();

  return (
    <div>
    {/* Breadcrumb */}
    <div className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__links">
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
            {/* <Link className="brdcrm_2" to={`/products/${category}`}>
              {category}
            </Link> */}
            <span>            
                {selectedCategory === '*' ? 'All Products' : selectedCategory}
                </span>
          </div>
        </div>
      </div>
    </div>
  </div>

   

      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row property__gallery" id="property__gallery">
            {products.map(product => (
              // Only render the product if the label is "NEW" and matches the selected category
              ((selectedCategory === '*' || product.category === selectedCategory)) && (
                <div key={product.id} className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}>
                  <div className="product__item">
                    <div className="product__item__pic">
                      <Link className="col-sm-12" style={{ textDecoration: 'none' }} to={`/product-details/${product.id}`}>
                        <img className="product__item__pic" src={'/'+product.images[1]} alt={product.name} />
                      </Link>
                      <div className={`label ${product.label}`}>{product.labelText}</div>
                      <ul className="product__hover">
                      <li>
                          <Link to={product.image} className="image-popup">
                          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>                          </Link>
                        </li>
                        {/* <li>
                          <Link onClick={() => addToWishList(product, 'wishlist')}>
                          <i className="fas fa-heart"></i>
                          </Link>
                        </li> */}
                        <li>
                          <Link onClick={() => addToCart(product)}>
                          <i className="fa-solid fa-bag-shopping"></i>                         
                           </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>
                        <Link to={`/product-details/${product.id}`}>{product.name}</Link>
                      </h6>
                      <div className="rating">
                        {Array.from({ length: product.rating }, (_, index) => (
                          <i key={index} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="product__price">{`$ ${product.price}`}</div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
      {/* Product Section End */}
    </div>
  );
};

export default CatWiseProductsSection;
