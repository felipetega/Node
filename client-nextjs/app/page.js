'use client'
import React, { useState, useEffect } from 'react';
import Category from '@/components/Category';
import Display from "@/components/Display";
import CardSection from '@/components/CardSection';
import Products from '@/components/Products';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>

          <Products products={products} />
    </>
  )
}
