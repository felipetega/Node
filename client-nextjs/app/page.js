'use client'
import { useState, useEffect } from 'react';
import Products from '@/components/Products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [allCategories, setAllCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    updateUrl(category);
  };

  const updateUrl = (category) => {
    const params = new URLSearchParams();
    if (category) {
      params.set('category', category);
    }
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.pushState({}, '', newUrl);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        const categories = Array.from(new Set(data.flatMap(product => product.categories)));
        setAllCategories(categories);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'http://localhost:3000/api/products';

        const params = new URLSearchParams();
        if (categoryFilter) {
          params.append('category', categoryFilter);
        }

        if (params.toString()) {
          url += `?${params.toString()}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, [categoryFilter]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setCategoryFilter(categoryParam);
    }
  }, []);

  return (
    <>
      <div className="dropdown dropdown-bottom mx-2">
        <label tabIndex={0} className="btn m-1">Filtrar por categoria</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a onClick={() => handleCategoryChange(null)}>Todos</a>
          </li>
          {allCategories.map((category, index) => (
            <li key={index}>
              <a onClick={() => handleCategoryChange(category)}>{category}</a>
            </li>
          ))}
        </ul>
      </div>

      <Products products={products} />
    </>
  )
}
