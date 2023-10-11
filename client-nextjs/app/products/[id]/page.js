'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }) {
  const [product, setProduct] = useState(null);
  console.log(params.id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCTS_FIND}/${params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      window.location.href = '/cart';
      return;
    }
  
    const newItem = { id: product.id, title: product.title, price: product.price, quantity: 1 };
    const updatedCart = [...cartItems, newItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.href = '/cart';
  };


  console.log(product);

  return (
    <div>
      <div>My Post: {params.id}</div>
      {product && (
        <div>
          <h2>Product Details</h2>
          <p>Name: {product.title}</p> {/* Corrigido para 'title' */}
          <p>Description: {product.desc}</p> {/* Corrigido para 'desc' */}
          <p>Color: {product.color}</p>
          <p>Price: {product.price}</p>
          <div style={{ position: 'relative', height: '300px', width: '300px' }}>
            <Image
              src={`/${product.img}`}
              alt={product.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <Link href={`/cart`}> */}
          <button className="btn btn-primary" onClick={addToCart}>
            Add to cart
          </button>
          <Link href={`/cart`}>
            Ver Carrinho
          </Link>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
}