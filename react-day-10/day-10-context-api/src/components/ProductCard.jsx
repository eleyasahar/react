import React from "react";
import { Star } from "lucide-react";

// 1. Yahan prop ka naam 'setIsCartItems' rakhein jo App.jsx se aa raha hai
const ProductCard = ({ product, setIsCartItems }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="w-fit bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-semibold text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        {/* 2. Yahan 'setIsCartItems' ko sahi tarike se call kiya */}
        <button 
          onClick={() => setIsCartItems(prev => [...prev, product])}
          className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;