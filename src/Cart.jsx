import React from "react";

function Cart({ cartItems }) {
  return (
    <div className="absolute right-0 mt-2 w-72 bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg rounded-lg p-4 border border-gray-300
                     opacity-1  z-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Items</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b py-3 text-gray-800">
            {/* Product Image */}
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-12 h-12 object-cover rounded-md mr-3" 
            />
            <span className="font-medium">{item.title}</span>
            <span className="font-medium">${item.price.toFixed(2)}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
