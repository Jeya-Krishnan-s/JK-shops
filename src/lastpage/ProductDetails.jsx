import React from 'react';

const ProductDetails = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Leather Sneakers</h2>
      <p className="text-lg">
        <span className="line-through text-gray-500">$115.00</span>
        <span className="text-red-500 font-bold ml-2">$85.00</span>
      </p>
      <p className="text-green-600">In Stock</p>

      <div>
        <p className="text-sm font-medium">Color: White</p>
        <div className="flex space-x-2 mt-2">
          <img
            src="https://i.pinimg.com/736x/2d/56/f2/2d56f2ca8f29561aecd7f0e2641656a7.jpg"
            alt="Color Option"
            className="w-12 h-12 rounded-lg border border-gray-300"
          />
          <img
            src="https://i.pinimg.com/736x/05/52/eb/0552eb6db3abf402d7ccd18688ac5b6d.jpg"
            alt="Color Option"
            className="w-12 h-12 rounded-lg border border-gray-300"
          />
        </div>
      </div>

      <div>
        <p className="text-sm font-medium">Size:</p>
        <div className="grid grid-cols-6 gap-2 mt-2">
          {['6', '6.5', '7', '7.5', '8', '8.5'].map((size) => (
            <button
              key={size}
              className="border border-gray-300 p-2 rounded hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <button className="bg-black text-white py-2 px-4 rounded">
          Add to Cart
        </button>
        <button className="border border-gray-300 py-2 px-4 rounded">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
