// CartItem.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


const CartItem = ({ order_id, quantity, product_details,onRemove }) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  // Function to update quantity
  const updateQuantity = async (newQuantity) => {
    setCurrentQuantity(newQuantity);

    try {
      const response = await axios.put(`http://localhost:4000/api/cart/update-quantity/${order_id}`, {
        quantity: newQuantity,
      });
      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Cart Updated successfully',
          showConfirmButton: false,
          timer: 1000
        });
      } 
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error !',
        text: error.message,
        showConfirmButton: false,
        timer: 1000
      });
    
    console.error('Error updating quantity:', error.message);
    }

  };

  // Function to delete the record
  const deleteRecord = async () => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/delete-order/${order_id}`);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Item Removed Successfully',
        showConfirmButton: false,
        timer: 1000


      });
      onRemove(order_id);
        } catch (error) {
      console.error('Error deleting record:', error.message);
      // TODO: Handle error
    }
  };

 

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      updateQuantity(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(newQuantity);
  };

  const total = (product_details.price * currentQuantity).toFixed(2);


  return (
    <tr>
      <td className="cart__product__item">
        <img width="90px" src={product_details.images[1]} alt="" />
        <div className="cart__product__item__title">
          <h6>
            <Link to={`/product-details/${product_details.id}`}>{product_details.name}</Link>
          </h6>
          <div className="rating">
            <i className="fa fa-star"> </i> <i className="fa fa-star"> </i> <i className="fa fa-star"> </i>{' '}
            <i className="fa fa-star"> </i>{' '}
          </div>
        </div>
      </td>

      <td className="cart__price">${product_details.price}</td>
      <td className="cart__quantity">
        <div className="pro-qty">
          <span className="dec qtybtn" onClick={handleDecrease}>
            -
          </span>
          <input
            id={order_id}
            type="text"
            value={currentQuantity}
            onChange={(e) => updateQuantity(parseInt(e.target.value, 10) || 0)}
          />
          <span className="inc qtybtn" onClick={handleIncrease}>
            +
          </span>
        </div>
      </td>
      <td className="cart__total">${total}</td>
      <td className="cart__close">
        <span onClick={() => deleteRecord(order_id)} className="icon_close"><i className="fa-solid fa-trash"></i></span>
      </td>
    </tr>
  );
};

export default CartItem;
