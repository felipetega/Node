const Product = ({ title, desc, img, categories, size, color, price }) => {
  return (
    <div className="card max-w-md bg-base-100 shadow-xl mb-4 mx-4">
      <figure><img src={img} alt={title} /></figure>
      <div className="card-body p-4">
        <div className="flex justify-between">
          <h2 className="card-title text-2xl mb-4">
            {title}
          </h2>
          <div className="flex flex-wrap">
            {categories.map((category, index) => (
              <div key={index} className="badge badge-outline mr-2 mb-2">{category}</div>
            ))}
          </div>
        </div>
        {/* <p>{desc}</p> */}
      </div>
    </div>
  );
};

export default Product;
