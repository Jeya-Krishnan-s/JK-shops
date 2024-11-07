import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";

function Navbar({ cartItems }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-green-400 to-yellow-400 text-white">
      {/* Left section: Home and other links */}
      <div className="flex space-x-6">
        <a href="/" className="text-lg font-bold">Home</a>
        <a href="/products" className="text-lg font-bold">Products</a>
        <a href="/about" className="text-lg font-bold">About</a>
        <a href="/contact" className="text-lg font-bold">Contact</a>
      </div>

      {/* Center: Title */}
      <h1 className="text-lg font-bold">Shopping Cart</h1>

      {/* Right section: Cart */}
      <div className="relative">
        <div onClick={() => setShowCart(!showCart)} className="cursor-pointer flex items-center">
          <FiShoppingCart size={24} />
          <span className="ml-1 text-sm bg-red-500 rounded-full px-2 py-1">{cartItems.length}</span>
        </div>
        {showCart && <Cart cartItems={cartItems} />}
      </div>
    </nav>
  );
}

export default Navbar;
