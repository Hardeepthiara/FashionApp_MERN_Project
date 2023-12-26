import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';

export default function Kids() 
{
  const addToWishList = (product, action) => {
    // Add your addToWishList logic here
    console.log(`Product added to ${action}:`, product);
  };
  return (
    
    <div>
            <div><Navbar/></div>
 
           <div>
             {/* BANNER BEGIN */}
         <section className="banner set-bg category-banner" style={{ backgroundImage: 'url("img/banner/9.jpeg")' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-8 m-auto">
            <div className="banner__slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage" style={{ transform: 'translate3d(-2070px, 0px, 0px)', transition: 'all 1.2s ease 0s', width: '4830px' }}>
                  <div className="owl-item cloned" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_2">men hat</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_3">men belt</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_1">men jacket</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_2">men hat</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_3">men belt</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_1">men jacket</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: '690px' }}>
                    <div className="banner__item">
                      <div className="banner__text">
                        <span>The Men's Collection</span>
                        <h1 className="text_2">men hat</h1>
                        <Link to="#">Shop now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button>
                <button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot"><span></span></button>
                <button role="button" className="owl-dot active"><span></span></button>
                <button role="button" className="owl-dot"><span></span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* BANNER END */}
           <section class="shop spad">
          <div class="container">
          <div className="col-lg-12 col-md-12">
          <div className="row property__gallery" id="property__gallery">
        {/* Product 1 */}
        <div className="col-lg-3 col-md-4 col-sm-6 mix kids">
          <div className="product__item">
            <div className="product__item__pic ">
              <Link to="product-details.html?id=1">
                <img
                  className="product__item__pic"
                  src="img/product/kids/shoes-1.png"
                  alt="Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats"
                />
              </Link>
              <div className="label new">100% New</div>
              <ul className="product__hover">
                <li>
                  <Link to="img/product/kids/shoes-1.png" className="image-popup">
                    <span className="arrow_expand"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats',
                          price: 28.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'wishlist'
                      )
                    }
                  >
                    <span className="icon_heart_alt"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats',
                          price: 28.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'cart'
                      )
                    }
                  >
                    <span className="icon_bag_alt"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <Link to="product-details.html?id=1">
                  Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats
                </Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
                <i className="fa fa-star"> </i>
              </div>
              <div className="product__price">$ 28.6</div>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="col-lg-3 col-md-4 col-sm-6 mix kids">
          <div className="product__item">
            <div className="product__item__pic ">
              <Link to="product-details.html?id=2">
                <img
                  className="product__item__pic"
                  src="img/product/kids/kids-9.png"
                  alt="Newborn Baby Letter Graphic Tee & Floral Print Pants"
                />
              </Link>
              <div className="label stockout">Out of Stock</div>
              <ul className="product__hover">
                <li>
                  <Link to="img/product/kids/kids-9.png" className="image-popup">
                    <span className="arrow_expand"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 2,
                          name: 'Newborn Baby Letter Graphic Tee & Floral Print Pants',
                          price: 17.99,
                          description: 'Multicolored casual Tee Pants with V neck and long sleeve for girls with medium stretch. Machine wash, do not dry clean.',
                          category: 'kids',
                          rating: 5,
                          label: 'stockout',
                          labelText: 'Out of Stock',
                          delivery: 'Free delivery',
                          newcollection: 0,
                          images: {
                            1: 'img/product/kids/kids-9.png',
                            2: 'img/product/kids/kids-10.png',
                            3: 'img/product/kids/kids-11.png',
                            4: 'img/product/kids/kids-12.png',
                          },
                        },
                        'wishlist'
                      )
                    }
                  >
                    <span className="icon_heart_alt"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 2,
                          name: 'Newborn Baby Letter Graphic Tee & Floral Print Pants',
                          price: 17.99,
                          description: 'Multicolored casual Tee Pants with V neck and long sleeve for girls with medium stretch. Machine wash, do not dry clean.',
                          category: 'kids',
                          rating: 5,
                          label: 'stockout',
                          labelText: 'Out of Stock',
                          delivery: 'Free delivery',
                          newcollection: 0,
                          images: {
                            1: 'img/product/kids/kids-9.png',
                            2: 'img/product/kids/kids-10.png',
                            3: 'img/product/kids/kids-11.png',
                            4: 'img/product/kids/kids-12.png',
                          },
                        },
                        'cart'
                      )
                    }
                  >
                    <span className="icon_bag_alt"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <Link to="product-details.html?id=2">Newborn Baby Letter Graphic Tee & Floral Print Pants</Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>
              </div>
              <div className="product__price">$ 17.99</div>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="col-lg-3 col-md-4 col-sm-6 mix kids">
          <div className="product__item">
            <div className="product__item__pic ">
              <Link to="product-details.html?id=1">
                <img
                  className="product__item__pic"
                  src="img/product/kids/kids-5.png"
                  alt="Nike Boys White &amp; Yellow Brand Logo Printed T-Shirt"
                />



                
              </Link>
              <div className="label new">100% New</div>
              <ul className="product__hover">
                <li>
                  <Link to="img/product/kids/shoes-1.png" className="image-popup">
                    <span className="arrow_expand"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Nike Boys White & Yellow Brand Logo Printed T-Shirt',
                          price: 18.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'wishlist'
                      )
                    }
                  >
                    <span className="icon_heart_alt"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Nike Boys White & Yellow Brand Logo Printed T-Shirt',
                          price: 18.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'cart'
                      )
                    }
                  >
                    <span className="icon_bag_alt"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <Link to="product-details.html?id=1">
                Nike Boys White & Yellow Brand Logo Printed T-Shirt
                </Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
                <i className="fa fa-star"> </i>
              </div>
              <div className="product__price">$ 18.6</div>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="col-lg-3 col-md-4 col-sm-6 mix kids">
          <div className="product__item">
            <div className="product__item__pic ">
              <Link to="product-details.html?id=1">
                <img
                  className="product__item__pic"
                  src="img/product/kids/kids-16.png"
                  alt="Fashion Dram Girls Top &amp; Sweat Pants"
                />
              </Link>
              <div className="label new">100% New</div>
              <ul className="product__hover">
                <li>
                  <Link to="img/product/kids/shoes-1.png" className="image-popup">
                    <span className="arrow_expand"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Nike Boys White & Yellow Brand Logo Printed T-Shirt',
                          price: 18.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'wishlist'
                      )
                    }
                  >
                    <span className="icon_heart_alt"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats',
                          price: 28.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'cart'
                      )
                    }
                  >
                    <span className="icon_bag_alt"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <Link to="product-details.html?id=1">
                Fashion Dram Girls Top &amp; Sweat Pants
                </Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
                <i className="fa fa-star"> </i>
              </div>
              <div className="product__price">$ 45.6</div>
            </div>
          </div>
        </div>
        {/* Product 5 */}
        <div className="col-lg-3 col-md-4 col-sm-6 mix kids">
          <div className="product__item">
            <div className="product__item__pic ">
              <Link to="product-details.html?id=1">
                <img
                  className="product__item__pic"
                  src="img/product/kids/kids-1.png"
                  alt="Navy Blue Colourblocked Layered Satin Dress"
                />

              </Link>
              <div className="label new">100% New</div>
              <ul className="product__hover">
                <li>
                  <Link to="img/product/kids/shoes-1.png" className="image-popup">
                    <span className="arrow_expand"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats',
                          price: 28.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'wishlist'
                      )
                    }
                  >
                    <span className="icon_heart_alt"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={() =>
                      addToWishList(
                        {
                          id: 1,
                          name: 'Girls Buckle Decor Flats, Glamorous Party Glitter Mary Jane Flats',
                          price: 28.6,
                          description: 'Multicolor, Round Toe for Girls with Glitter upper material',
                          category: 'kids',
                          rating: 4,
                          label: 'new',
                          labelText: '100% New',
                          delivery: 5,
                          newcollection: 1,
                          images: {
                            1: 'img/product/kids/shoes-1.png',
                            2: 'img/product/kids/shoes-2.png',
                            3: 'img/product/kids/shoes-3.png',
                            4: 'img/product/kids/shoes-4.png',
                          },
                        },
                        'cart'
                      )
                    }
                  >
                    <span className="icon_bag_alt"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product__item__text">
              <h6>
                <Link to="product-details.html?id=1">
                Navy Blue Colourblocked Layered Satin Dress
                </Link>
              </h6>
              <div className="rating">
                <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
                <i className="fa fa-star"> </i>
              </div>
              <div className="product__price">$ 58.6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
           </section>
           
          </div>
          {/* INSTA SECTION BEGINS */}
    <div className="instagram">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-1.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-2.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-3.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-4.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-5.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 p-0">
            <div className="instagram__item set-bg" style={{ backgroundImage: 'url(img/instagram/insta-6.jpg)' }}>
              <div className="instagram__text">
                <i className="fa fa-instagram"></i>
                <Link to="https://www.instagram.com/myntra/">@ Fashioninsta</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div><Footer/></div>


    </div>
    
  )
}


