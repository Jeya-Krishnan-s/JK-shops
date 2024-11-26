import React, { useState } from "react";
import Heade from "./Heade";
import Wmcard from "./Apii/Wmcard";

const Appcart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add the product to the cart
  };

  const products = [
    { id: 1, title: "Product 1", price: 25.99, image: "https://via.placeholder.com/150" },
    { id: 2, title: "Product 2", price: 45.99, image: "https://via.placeholder.com/150" },
    { id: 3, title: "Product 3", price: 65.99, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div>
      <Heade cartItems={cartItems} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
        {products.map((product) => (
          <Wmcard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Appcart;
