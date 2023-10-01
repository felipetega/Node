import Image from 'next/image';

const Products = ({ products, sortOrder }) => {
  let sortedProducts = [...products];

  if (sortOrder === 'Maior preço') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === 'Menor preço') {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {sortedProducts.map(product => (
        <div key={product._id} className="card max-w-md bg-base-100 shadow-xl mb-4 mx-4">
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
        </div>
      ))}
    </div>
  );
};

export default Products;
