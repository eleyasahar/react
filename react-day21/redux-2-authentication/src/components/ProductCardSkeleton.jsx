import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg animate-pulse">

      {/* Image */}
      <div className="h-64 bg-zinc-800 flex items-center justify-center">
        <div className="w-40 h-40 rounded-xl bg-zinc-700"></div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <div className="h-5 w-3/4 bg-zinc-700 rounded mb-5"></div>

        {/* Price & Stock */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-20 bg-zinc-700 rounded"></div>

          <div className="h-7 w-16 bg-zinc-700 rounded-full"></div>
        </div>

        {/* Button */}
        <div className="h-12 w-full bg-zinc-700 rounded-xl"></div>

      </div>
    </div>
  );
};

export default ProductCardSkeleton;