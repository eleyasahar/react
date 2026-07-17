import React, { useContext } from "react";
import { Trash2 } from "lucide-react";
import { MyShop } from "../Context/MyWebsite";

const Cart = () => {
 let {cartItems} = useContext(MyShop)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">🛒 Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-500">
              Your Cart is Empty
            </h2>
            <p className="text-gray-400 mt-2">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 border rounded-xl p-4 hover:shadow-md transition"
                >
                  {/* Image */}
                  <div className="w-28 h-28 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h2 className="font-bold text-lg line-clamp-2">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 capitalize mt-1">
                      {item.category}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      ⭐
                      <span>{item.rating.rate}</span>
                      <span className="text-gray-400">
                        ({item.rating.count})
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <h2 className="text-2xl font-bold text-green-600">
                      ${item.price}
                    </h2>

                    <button className="mt-3 flex items-center gap-2 text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="mt-8 border-t pt-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">
                  Total Items : {cartItems.length}
                </h2>

                <h1 className="text-3xl font-bold mt-2 text-green-600">
                  Total : ${totalPrice.toFixed(2)}
                </h1>
              </div>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;