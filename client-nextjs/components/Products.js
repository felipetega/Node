import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importe o Link do Next.js

const Products = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.innerText);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  // Extrair todas as categorias únicas de todos os produtos
  const allCategories = Array.from(new Set(products.flatMap(product => product.categories)));

  let sortedProducts = [...products];

  if (selectedOption === 'Maior preço') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (selectedOption === 'Menor preço') {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (selectedCategory !== 'Todos') {
    sortedProducts = sortedProducts.filter(product => product.categories.includes(selectedCategory));
  }

  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <div className="dropdown dropdown-bottom mx-2">
          <label tabIndex={0} className="btn m-1">Ordenar por</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a onClick={handleSelectChange}>Maior preço</a></li>
            <li><a onClick={handleSelectChange}>Menor preço</a></li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {sortedProducts.map(product => (
          <div key={product._id} className="card max-w-md bg-base-100 shadow-xl mb-4 mx-4">
            <Link href={`/products/${product._id}`}> {/* Adicione o Link aqui */}
                <div style={{ position: 'relative', height: '300px' }}>
                  <Image
                    src={`/${product.img}`}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="card-body p-4">
                  <div className="flex justify-between">
                    <h2 className="card-title text-2xl mb-4">
                      {product.title}
                    </h2>
                    <div className="flex flex-wrap">
                      {product.categories.map((category, index) => (
                        <div key={index} className="badge badge-outline mr-2 mb-2">{category}</div>
                      ))}
                    </div>
                  </div>
                  <p>{product._id}</p>
                  <p>{product.price}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;