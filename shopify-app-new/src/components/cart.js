import React from 'react';
import './cart.css';


const Cart = ({ cart, removeFromCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul className="cart-grid">
        {cart.map((item) => (
          <li className="cart-card" key={item.id}>
            <div className="cart-card-details">
              <h3>{item.title}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;

