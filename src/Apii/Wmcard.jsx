import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; // Corrected path

const Wmcard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-cover mb-4"
      />
      <h3 className="font-medium">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <div className=" mt-4">
        <button
          onClick={() => dispatch(addToCart(product))} // Dispatching addToCart action
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Wmcard;
