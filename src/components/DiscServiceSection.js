import React from 'react'
import { Link } from 'react-router-dom';

import '../css/style.css'; 
export default function DiscServiceSection() {
  return (
    <div>
{/* Discount Section Begin */}
  <section className="discount">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 p-0">
        <div className="discount__pic">
          <img src="img/banner/disc.jpeg" alt="" />
        </div>
      </div>
      <div className="col-lg-6 p-0">
        <div className="discount__text">
          <div className="discount__text__title">
            <span>Discount</span>
            <h2>Summer 2023</h2>
            <h5><span>Sale</span> 50%</h5>
          </div>
          <div className="discount__countdown" id="countdown-time">
            <div className="countdown__item">
              <span>22</span>
              <p>Days</p>
            </div>
            <div className="countdown__item">
              <span>18</span>
              <p>Hour</p>
            </div>
            <div className="countdown__item">
              <span>46</span>
              <p>Min</p>
            </div>
            <div className="countdown__item">
              <span>05</span>
              <p>Sec</p>
            </div>
          </div>
          Use Coupon Code <Link to="#">SUMMER_SALE_50</Link> to get 50% off
        </div>
      </div>
    </div>
  </div>
</section>
{/* Discount Section End */}

{/* Services Section Begin */}
<section className="services spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="services__item">
        <i className="fa fa-truck" aria-hidden="true"></i>

          <h6>Free Shipping</h6>
          <p>For all orders over $99</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="services__item">
        <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
          <h6>Money Back Guarantee</h6>
          <p>If goods have Problems</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="services__item">
        <i className="fa fa-headphones"></i>
          <h6>Online Support 24/7</h6>
          <p>Dedicated support</p>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="services__item">
        <i className="fa-solid fa-shield-halved"></i>          
        <h6>Payment Secure</h6>
          <p>100% secure payment</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Services Section End */}
</div>
)
}
