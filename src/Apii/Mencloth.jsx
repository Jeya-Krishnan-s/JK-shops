import React, { useState, useEffect } from "react";
import Wmcard from "./Wmcard";
import { Link } from "react-router-dom";

const Mencloth = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Change the API URL to the men's clothing category
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">Men's Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id}>
           <Link to={`/main/${product.id}`}>
              <Wmcard product={product} addToCart={addToCart} />
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Mencloth;
