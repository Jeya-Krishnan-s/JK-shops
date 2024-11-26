import React, { useState, useEffect } from "react";
import Wmcard from "./Apii/Wmcard"; // Import your card component

const Top = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // State to manage cart items

  useEffect(() => {
    // Fetching the products from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {products.map((product) => (
          <Wmcard
            key={product.id}
            product={product}
            addToCart={(newItem) => setCart((prev) => [...prev, newItem])}
          />
        ))}
      </div>
    </div>
  );
};

export default Top;
