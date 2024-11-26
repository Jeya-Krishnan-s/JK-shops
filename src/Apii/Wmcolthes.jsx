import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Wmcard from "./Wmcard";

const Wmclothes = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="container mx-auto px-4 py-6 relative">
      {/* Cart Icon */}
      

      {/* Cart Panel */}
      {isCartVisible && (
        <div className="fixed top-0 right-0 h-full bg-gray-100 shadow-lg p-4 w-72 z-50">
          <button
            onClick={() => setCartVisible(false)}
            className="text-red-500 text-lg mb-4"
          >
            Close
          </button>
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2 mb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price}</p>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <h1 className="text-3xl font-bold mb-6">Women's Clothing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            {/* Wrap Wmcard with Link for routing */}
            <Link to={`/main/${product.id}`}>
              <Wmcard product={product} addToCart={addToCart} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wmclothes;
