import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-gradient-to-r from-green-400 to-white-400 rounded-lg p-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transform transition-all duration-150 hover:scale-105"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
