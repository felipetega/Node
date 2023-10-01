import { useState } from 'react';
import Products from './Products';

const Display = ({ products }) => {
  const [selectedOption, setSelectedOption] = useState('default');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.innerText);
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="dropdown dropdown-bottom">
        <label tabIndex={0} className="btn m-1">Ordenar por</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a onClick={handleSelectChange}>Maior preço</a></li>
          <li><a onClick={handleSelectChange}>Menor preço</a></li>
        </ul>
      </div>
      <Products products={products} sortOrder={selectedOption} />
    </div>
  );
}

export default Display;
