import React from 'react';
import { useSelector } from 'react-redux';

const FloatingCart = () => {
  const cart = useSelector((state) => state.cart);

  if (!cart) {
    return null; 
  }

  const totalItems = cart.items.length;
  const totalAmount = cart.totalAmount;

  return (
    <div className="floating-cart">
      <div className="cart-icon">
        <span className="item-count">{totalItems}</span>
      </div>
      <div className="cart-details">
        <h5>Cart</h5>
        <p>Total Items: {totalItems}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FloatingCart;
