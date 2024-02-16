var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
// var id = urlParams.get('id');


$(document).ready(function() {
    var target_product = {};
    products.forEach(element => {
        if(element.id == id){
            target_product = element;
        }
    });
    $('.breadcrumb__links a.brdcrm_2')
    .text(target_product.category).attr('href', 'products.html?category='+target_product.category);
    $('.breadcrumb__links span').text(target_product.name);

    var ratingHtml = '';
    for (var j = 0; j < target_product.rating; j++) {
        ratingHtml += '<i className="fa fa-star"> </i> ';
    }
    $('.rating').append(ratingHtml);

    // $('.category-banner').css('background-image', 'url(' + target_product.image + ')');
    $('.product__details__text h3').text(target_product.name);
    $('.product__details__price ').text('$'+target_product.price);
    $('.product__details__text p.desc').text(target_product.description);

    for (var key in target_product.images) {
        if (target_product.images.hasOwnProperty(key)) {
            $('#thum_'+key).attr('src',target_product.images[key]);
            $('#p_pic_'+key).attr('src',target_product.images[key]);

        }
    }


    $('.cart-btn').on('click', function(event) {
        event.preventDefault(); // Stop the default behavior of the button

        // Get the product ID and quantity from the form
        var product_id = target_product.id;
        var quantity = $('.pro-qty input').val();
        
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (currentUser) {
          const userData = JSON.parse(localStorage.getItem('userData'));
          var i = userData.findIndex((user) => user.user_id === currentUser.user_id);
          var filteredUserData = userData[i];
          var cartData = filteredUserData['cart'];
        
          // create an object to store the cart data
          var cart_data = {
            'product_id': product_id,
            'quantity': quantity
          };
        
          // check if the product already exists in the cart
          var itemIndex = -1;
          for (var j = 0; j < cartData.length; j++) {
            if (cartData[j].product_id == product_id) {
              itemIndex = j;
              break;
            }
          }
        
          // if item exists then update its quantity
          if (itemIndex > -1) {
            cartData[itemIndex].quantity += parseInt(quantity);
          } else {
            // otherwise, add the item to the cart
            cartData.push(cart_data);
          }
        
          localStorage.setItem("userData", JSON.stringify(userData));
          alert('Item added successfully into the cart!!')
          window.location.href = 'shop-cart.html';
        } else {
          alert('Kindly Login or Sign-up first to add item in cart!!')
          window.location.href = 'login.html';
        }
        
    });

});

$(document).ready(function () {
    var target_product = {};
    products.forEach(element => {
        if(element.id == id ){
            target_product = element;
        }
    });
    // get reference to the container
    var container = document.querySelector('#related');

    // loop through the products array and generate HTML for each product
    for (var i = 0; i < products.length; i++) {
        if (products[i].category == target_product.category && products[i].id != target_product.id) {
            var product = products[i];

            var ratingHtml = '';
            for (var j = 0; j < product.rating; j++) {
                ratingHtml += '<i className="fa fa-star"> </i> ';
            }

            // create the HTML for the product card
            var card = `
                <div className="product__item">
                    <div className="product__item__pic">
                    <a style="text-decoration:none" href="product-details.html?id=${product.id}"><img className="product__item__pic" src="${product.images[1]}" alt="${product.name}"></a>
                    <div className="label ${product.label}">${product.labelText}</div>
                        <ul className="product__hover">
                            <li>
                                <a href="${product.images[1]}" className="image-popup">
                                    <span className="arrow_expand"></span>
                                </a>
                            </li>
                            <li>
                                <a onclick="addToWishList('${encodeURI(JSON.stringify(product))}','wishlist')">
                                    <span className="icon_heart_alt"></span>
                                </a>
                            </li>
                            <li>
                                <a onclick="addToWishList('${encodeURI(JSON.stringify(product))}','cart')">
                                    <span className="icon_bag_alt"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="product-details.html?id=${product.id}">${product.name}</a>
                        </h6>
                        <div className="rating">${ratingHtml}</div>
                        <div className="product__price">$ ${product.price}</div>
                    </div>
                </div>`;

            // create a new element to hold the product card HTML
            var cardWrapper = document.createElement('div');
            cardWrapper.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'mix', product.category);
            cardWrapper.innerHTML = card;

            // append the product card to the container
            container.appendChild(cardWrapper);
        }
    }

    $('.image-popup').on('click', function (e) {
        // Get the image source
        e.preventDefault();
        var imgSrc = $(this).attr('href');

        // Create the popup HTML with the image
        var popupHtml = '<div className="popup"><img width="500px" src="' + imgSrc + '"></div>';

        // Add the popup HTML to the body
        $('body').append(popupHtml);

        // Fade in the background overlay
        $('body').append('<div className="popup-overlay"></div>');
        $('.popup-overlay').fadeIn();

        // Fade in the popup
        $('.popup').fadeIn();
    });

    // Hide the popup and overlay when clicked
    $('body').on('click', '.popup, .popup-overlay', function () {
        $('.popup, .popup-overlay').fadeOut(function () {
            $(this).remove();
        });
    });
});
