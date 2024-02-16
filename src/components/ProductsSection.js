import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../css/style.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('*');
  const isLoggedIn = sessionStorage.getItem('userId');
  console.log(isLoggedIn)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


  const addToCart = async (product) => {
    try {
      // Check if the user is logged in
      if (!isLoggedIn) {
        Swal.fire({
          icon: 'warning',
          title: 'Login Required',
          text: 'Please log in to add items to the cart.',
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
  

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Product Section Begin */}
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className={selectedCategory === '*' ? 'active' : ''} onClick={() => handleCategoryFilter('*')}>All</li>
                <li className={selectedCategory === 'women' ? 'active' : ''} onClick={() => handleCategoryFilter('women')}>Womens</li>
                <li className={selectedCategory === 'men' ? 'active' : ''} onClick={() => handleCategoryFilter('men')}>Men</li>
                <li className={selectedCategory === 'kids' ? 'active' : ''} onClick={() => handleCategoryFilter('kids')}>Kids</li>
                <li className={selectedCategory === 'accessories' ? 'active' : ''} onClick={() => handleCategoryFilter('accessories')}>Accessories</li>
                <li className={selectedCategory === 'cosmetic' ? 'active' : ''} onClick={() => handleCategoryFilter('cosmetic')}>Cosmetics</li>

              </ul>
            </div>
          </div>

          <div className="row property__gallery" id="property__gallery">
            {products.map(product => (
              // Only render the product if the label is "NEW" and matches the selected category
              product.label === 'new' && (selectedCategory === '*' || product.category === selectedCategory) && (
                <div key={product.id} className={`col-lg-3 col-md-4 col-sm-6 mix ${product.category}`}>
                  <div className="product__item">
                    <div className="product__item__pic">
                      <Link className="col-sm-12" style={{ textDecoration: 'none' }} to={`product-details/${product.id}`}>
                        <img className="product__item__pic" src={product.images[1]} alt={product.name} />
                      </Link>
                      <div className={`label ${product.label}`}>{product.labelText}</div>
                      <ul className="product__hover">
                        <li>
                          <Link to={product.image} className="image-popup">
                          <i className="fa-solid fa-up-right-and-down-left-from-center"></i>                          </Link>
                        </li>
                        {/* <li>
                          <Link onClick={() => addToCart(product, 'wishlist')}>
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
                        <Link to={`product-details/${product.id}`}>{product.name}</Link>
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

export default ProductsSection;
