import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300">

      {/* Product Image */}
      <div className="bg-zinc-800 p-5 flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-5">

        <h2 className="text-lg font-semibold text-white line-clamp-1">
          {product.title}
        </h2>

        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-cyan-400">
            ${product.price}
          </span>

          <span className="text-sm bg-zinc-800 text-green-400 px-3 py-1 rounded-full">
            Stock: {product.stock}
          </span>
        </div>

        <button className="w-full mt-5 bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-medium transition duration-300">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;