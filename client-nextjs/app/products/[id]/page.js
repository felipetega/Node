'use client'
import { useEffect, useState } from 'react';

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
  

  console.log(product);

  return (
    <div>
      <div>My Post: {params.id}</div>
      {product && (
        <div>
          <h2>Product Details</h2>
          <p>Name: {product.title}</p> {/* Corrigido para 'title' */}
          <p>Description: {product.desc}</p> {/* Corrigido para 'desc' */}
          {/* Adicione outros detalhes do produto conforme necessário */}
        </div>
      )}
    </div>
  );
}