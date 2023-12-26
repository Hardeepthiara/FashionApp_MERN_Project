import React from 'react'
import { Link } from 'react-router-dom';

import '../css/style.css'; 
export default function CategoriesSection() {
  return (
    <div>
 {/* Categories Section Begin */}
 <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: 'url("img/categories/category-1.jpg")' }}>
              <div className="categories__text">
                <h1>Women’s Section</h1>
                <p style={{ color: 'white' }}><strong>Empowering Women Through Fashion, Confidence is Our Style</strong></p>
                <Link to="/products/women">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="categories__item set-bg" style={{ backgroundImage: 'url("img/categories/category-2.jpg")' }}>
                  <div className="categories__text">
                    <h4>Men’s Section</h4>
                    <p>358 items</p>
                    <Link to="/products/men">Shop now</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="categories__item set-bg" style={{ backgroundImage: 'url("img/categories/category-3.jpg")' }}>
                  <div className="categories__text">
                    <h4>Kid’s Section</h4>
                    <p>273 items</p>
                    <Link to="/products/kids">Shop now</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="categories__item set-bg" style={{ backgroundImage: 'url("img/categories/category-4.jpg")' }}>
                  <div className="categories__text">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <Link to="/products/cosmetic">Shop now</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="categories__item set-bg" style={{ backgroundImage: 'url("img/categories/category-5.jpg")' }}>
                  <div className="categories__text">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <Link to="/products/accessories">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* Categories Section End */}
</div>
  )
}
