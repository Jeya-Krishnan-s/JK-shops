import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove product from cart
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
    <div>
      {/* Cart Icon */}
      <div className="fixed top-4 right-4">
        <button onClick={() => setCartVisible(!isCartVisible)} className="relative">
          <AiOutlineShoppingCart size={30} />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </button>
      </div>

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
            {cart.length > 0 ? (
              cart.map((item) => (
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
              ))
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
