import Image from 'next/image';

const Products = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <div key={product._id} className="card max-w-md bg-base-100 shadow-xl mb-4 mx-4">
          <div style={{ position: 'relative', height: '300px' }}>
            {console.log(product.img)}
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
            <p>{product.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
