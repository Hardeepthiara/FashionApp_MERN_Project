import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';

const ProductDetails = () => {
  const location = useLocation();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/product-details/${getIdFromPath()}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          console.error('Failed to fetch product details');
        }
      } catch (error) {
        console.log(error);
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, );

  // useEffect(() => {
  //   const fetchQuantityFromServer = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:4000/api/cart/order/${getIdFromPath}/${isLoggedIn}`);
  //       if (response.ok) {
  //         const cartItem = await response.json();
  //         return cartItem ? cartItem.quantity : 1;
  //       } else {
  //         console.error('Failed to fetch quantity from the server');
  //         return 1;
  //       }
  //     } catch (error) {
  //       console.error('Error fetching quantity from the server:', error);
  //       return 1;
  //     }
  //   };

  //   fetchQuantityFromServer();
  // }, );

  const getIdFromPath = () => {
    const parts = location.pathname.split('/');
    if (parts.length >= 3) {
      return parts[2];
    }
    return '';
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => (isNaN(prevQuantity) ? 1 : prevQuantity + 1));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const addToCart = async () => {
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
        quantity: quantity,
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Product added to the cart successfully',
          showConfirmButton: false,
          timer: 1000
        });
        setTimeout(() => {
          window.location.href="/cart";

        }, 1000);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Duplicate Item!',
          text: response.data.message,
          showConfirmButton: false,
          timer: 1000
        });

        console.error('Failed to add the product to the cart:', response.data.message);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Error adding the product to the cart',
        showConfirmButton: false,
        timer: 1000
      });

      console.error('Error adding the product to the cart:', error.message);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div><Navbar /></div>

      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
                <Link className="brdcrm_2" to={`/products/${product.category}`}>
                  {product.category}
                </Link>
                <span>            
                    {product.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section className="product-details spad">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={`../${product.images[1]}`} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`../${product.images[2]}`} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`../${product.images[3]}`} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={`../${product.images[4]}`} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="rating">
                  <span>( 138 reviews )</span>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <i key={index} className="fa fa-star"></i>
                  ))}
                </div>
                <div className="product__details__price">$ {product.price}</div>
                <p className="desc">
                  {product.description}
                </p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <span className="dec qtybtn" onClick={decreaseQuantity}>-</span>
                      <input type="text" value={quantity} readOnly />
                      <span className="inc qtybtn" onClick={increaseQuantity}>+</span>
                    </div>
                  </div>
                  <button onClick={addToCart} className="cart-btn">
                    <span className="icon_bag_alt"></span> Add to cart
                  </button>
                  {/* Uncomment the following block if needed */}
                  {/* <ul>
                      <li>
                        <Link to="#" onClick={() => addToWishList(0, 'wishlist')}>
                          <span className="icon_heart_alt"></span>
                        </Link>
                      </li>
                    </ul> */}
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        <label htmlFor="red">
                          <input type="radio" name="color__radio" id="red" checked="" />
                          <span className="checkmark"></span>
                        </label>
                        <label htmlFor="black">
                          <input type="radio" name="color__radio" id="black" />
                          <span className="checkmark black-bg"></span>
                        </label>
                        <label htmlFor="grey">
                          <input type="radio" name="color__radio" id="grey" />
                          <span className="checkmark grey-bg"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        <label htmlFor="xs-btn" className="active">
                          <input type="radio" id="xs-btn" />
                          xs
                        </label>
                        <label htmlFor="s-btn">
                          <input type="radio" id="s-btn" />
                          s
                        </label>
                        <label htmlFor="m-btn">
                          <input type="radio" id="m-btn" />
                          m
                        </label>
                        <label htmlFor="l-btn">
                          <input type="radio" id="l-btn" />
                          l
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping above $100 shopping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Specification</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews ( 2 )</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>Fashionista offers a variety of styles, from casual to formal, and trendy to classic. You can find everything from comfortable loungewear to stylish workwear, party dresses, and suits. The website also offers a range of shoes, including sneakers, sandals, boots, and dress shoes, as well as a selection of handbags, jewelry, and other accessories to complete your look.</p>
                    <p>The website offers free shipping on orders over a certain amount, and the customer service team is always available to assist with any questions or concerns you may have. With a wide range of products and affordable prices, Fashionista is a great destination for anyone looking to update their wardrobe with stylish and trendy pieces.</p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <div className="dress-specs">
                      <ul>
                        <li><strong>Style:</strong> A-line</li>
                        <li><strong>Fabric:</strong> 100% polyester</li>
                        <li><strong>Color:</strong> Navy blue with white polka dots</li>
                        <li><strong>Size:</strong> Small</li>
                        <li><strong>Length:</strong> 34 inches</li>
                        <li><strong>Neckline:</strong> V-neck</li>
                        <li><strong>Sleeves:</strong> Sleeveless</li>
                        <li><strong>Embellishments:</strong> None</li>
                        <li><strong>Care instructions:</strong> Machine wash cold, tumble dry low</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
                    <div className="customer-reviews">
                      <div className="review">
                        <div className="reviewer-info">
                          <h4>Julie Smith</h4>
                          <p>Verified Buyer</p>
                          <p>5 stars</p>
                        </div>
                        <p className="review-text">I love this dress! The fabric is soft and comfortable, and the fit is perfect. It's a great dress for work or a night out with friends. Highly recommend!</p>
                      </div>
                      <div className="review">
                        <div className="reviewer-info">
                          <h4>Samuel Johnson</h4>
                          <p>Verified Buyer</p>
                          <p>4 stars</p>
                        </div>
                        <p className="review-text">The dress is beautiful and well-made, but the sizing is a bit off. I ordered a medium and it's a little too tight in the hips. I'd recommend going up a size if you're between sizes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div><Footer /></div>
    </div>
  );
};

export default ProductDetails;
