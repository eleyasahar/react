import React from 'react';

const ProductsCard = ({ product , del }) => {
  return (
    <div className='p-4 border-2 rounded w-64'>
      {/* img contianer */}
      <div className='w-40 h-40 overflow-hidden rounded mx-auto'>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* text container */}
      <div className='mt-4 text-center'>
        <h2 className='font-semibold text-lg'>{product.name}</h2>
        <p className='text-gray-500 text-sm'>{product.category}</p>
        <p className='text-green-500 font-bold text-xl mt-1'>₹{product.price.toLocaleString()}</p>
      </div>
      
      {/* button */}
      <button onClick={() => del(product.id)} className='mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full'>
        Delete
      </button>
    </div>  
  );
};

export default ProductsCard;