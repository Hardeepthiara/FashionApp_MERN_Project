import React from 'react'
import { Link } from 'react-router-dom';

import '../css/style.css'; 
export default function Footer() {
  return (
    <div>
              <hr></hr>

      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-7">
            <div className="footer__about">
              <div className="footer__logo">
                <Link to="/">
                  <img width="200px" src="../logo.jpeg" alt="" />
                </Link>
              </div>
              <p>
                We believe that fashion should be accessible to everyone, which
                is why we offer high-quality clothing at affordable prices.
              </p>
              <div className="footer__payment">
                <Link to="#">
                  <img src="img/payment/payment-1.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/payment/payment-2.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/payment/payment-3.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/payment/payment-4.png" alt="" />
                </Link>
                <Link to="#">
                  <img src="img/payment/payment-5.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footer__widget">
              <h6>Quick links</h6>
              <ul>
                <li>
                  <Link to="/products/kids">Kids</Link>
                </li>
                <li>
                  <Link to="/products/men">Men</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact</Link>
                </li>
                <li>
                  <Link to="/products/women">Women</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-8 col-sm-8">
                <div className="footer__newslatter">
                    <h6>Address</h6>
                
                   <ul className="list-unstyled">
	                   <li className="icon-font-mail text-decoration-none">
	                   Email :
	                   		<a href="mailto:info@lambtoncollege.ca"> info@quantum.ca</a>
	                   </li>
	                   <li className="icon-font-grad-cap">Program Info: 1-844-LAMBTON</li>
	                   <li className="icon-font-school">Main: 519-542-7751</li>
	                   <li className="icon-font-location">1457 London Road, Sarnia, ON, N7S 6K4</li>
                   </ul>
                   <div className="footer__social mt-4">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/myntra"
                >
                <img width="40"  src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>               
                </Link>
                <Link
                  target="_blank"
                  to="https://twitter.com/myntra?fbclid=IwAR1sTRLPwSQ6O850p2e5pGAyupOkm1uhq6zp9zLEhDJAF3mMrPLb1lFDJSU"
                >
                 <img width="40"  src="https://img.icons8.com/fluency/48/twitterx--v1.png" alt="twitterx--v1"/>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.youtube.com/myntra"
                >
                 <img width="40"  src="https://img.icons8.com/fluency/48/youtube-play.png" alt="youtube-play"/>
                </Link>
                <Link
                  target="_blank"
                  to="https://www.instagram.com/myntra/?fbclid=IwAR25oH3j_Fuj4vlFUYyWr1cwZM4ftqiFYQwt9Bg1UU8WLeA6KGMHG7y7d30"
                >
                 <img width="40"  src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
                </Link>
                <Link
                  target="_blank"
                  to="https://in.pinterest.com/myntra/"
                >
                <img width="40"  src="https://img.icons8.com/fluency/48/pinterest.png" alt="pinterest"/>                </Link>
              </div>
                </div>
                
            </div>
        
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright__text">
              <p>
                Copyright &copy; All rights reserved to <b>Fashionista </b>|
                This website is made by Fashionista Team with lots of{' '}
                <i className="fa fa-heart" aria-hidden="true"></i> from{' '}
                <Link to="/" target="_blank">
                  Fashionista
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
