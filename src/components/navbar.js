import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/style.css';

const Navbar = () => {
  const isLoggedIn = sessionStorage.getItem('userId');
  const userId = sessionStorage.getItem('userId');
  const [userDetails, setUserDetails] = useState({});
  const [itemsCount, setItemsCount] = useState(0); // Initialize itemsCount state
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/user/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId]);

  useEffect(() => {
    if(userId){
      fetchCartDetails();
    }
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        fetchCartDetails();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [userId, isFocused]);




  const fetchCartDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/cart/${userId}`);
      setItemsCount(response.data.orders.length); // Update the cart count
    } catch (error) {
      console.error('Error fetching cart details:', error.message);
    }
  };








  const handleLogout = () => {
    sessionStorage.removeItem('userId');
    window.location.href = '/login';
  };

  return (
    <div>
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to="/">
                  <img width="200px" src="/logo.jpeg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="/products/women">Women</Link></li>
                  <li><Link to="/products/men">Men</Link></li>
                  <li><Link to="/products/kids">Kids</Link></li>
                  <li><Link to="/products/cosmetic">Cosmetic</Link></li>
                  <li><Link to="/products/accessories">Accessories</Link></li>
                  <li><Link to="/contact-us">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                {isLoggedIn ? (
                  <>
                    <ul className="header__right__widget">
                      {/* <li><i className="fa-solid fa-magnifying-glass"></i></li>
                      <li><Link to="/wishlist"> <i className="fa-regular fa-heart"></i>
                        <div id="wishListTip" className="tip" style={{ display: 'none' }}></div>
                      </Link></li> */}
                      <li >
                        <Link className="mr-5" to="/cart" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
                        ><i className="fa-solid fa-cart-flatbed-suitcase"></i>  
                        <div id="cartTip" className="tip">{itemsCount}</div>
                      </Link></li>
                      <li  id="ddProfile" onClick={handleDropdownClick}>
                        <div className="dropdown">
                          <div
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            style={{ cursor: 'pointer' }}
                          >
                            <span className="user-icon">{userDetails.firstName ? userDetails.firstName[0] : 'N'}</span>
                          </div>
                          <div
                            className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
                            aria-labelledby="dropdownMenuLink"
                          >
                            <ul className="">
                              <li className="dropdown-item">
                                <Link id="ddFirstName" to="#">{userDetails.firstName}</Link>
                              </li>
                              <li className="dropdown-item" onClick={handleLogout}>
                                <Link id="ddLogout">Logout</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </>
                ) : (
                  <div id="LoginUser" className="header__right__auth">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      
    </div>

    
  );
};

export default Navbar;
