'use client'
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) || [] : []
  );

  const handleRemoveItem = (index) => {
    const updatedCart = [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleIncrementQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecrementQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    // Redireciona para a página de checkout
    window.location.href = './identify';
  };

  return (
    <div>
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Produto: {item.title}, Preço: { (item.price * item.quantity).toFixed(2) }, Quantidade: {item.quantity}
            <button onClick={() => handleRemoveItem(index)}>Remover</button>
            <button onClick={() => handleIncrementQuantity(index)}>+</button>
            <button onClick={() => handleDecrementQuantity(index)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Cart;
