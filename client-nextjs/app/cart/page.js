// 'use client'
import React from 'react';

const Cart = () => {
  let cartItems = [];

  // if (typeof window !== 'undefined') {
  //   cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  // }

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Produto: {item.name}, Quantidade: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
