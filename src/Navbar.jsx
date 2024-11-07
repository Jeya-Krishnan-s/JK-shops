import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";  // Import cart icon
import { GiHamburgerMenu } from "react-icons/gi";  // Import hamburger menu icon
import Cart from "./Cart";  // Import cart component

function Navbar({ cartItems }) {
  const [showCart, setShowCart] = useState(false);  // Toggle cart visibility
  const [menuOpen, setMenuOpen] = useState(false);  // Toggle menu visibility for mobile

  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-green-400 to-yellow-400 text-white">
      
      {/* Left section: Hamburger menu for mobile and navigation links */}
      <div className="flex items-center">
        
        {/* Hamburger Menu Icon (visible only on small screens) */}
        <div className="lg:hidden">  {/* 'lg:hidden' hides the hamburger menu on large screens */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu size={24} />
          </button>
        </div>

        {/* Navigation Links (Stacked on small screens and horizontal on large screens) */}
        <div className={`flex ${menuOpen ? "block" : "hidden"} lg:flex space-x-6 sm:flex-col sm:items-center sm:space-y-4 md:flex-row md:space-x-6`}>
          <a href="/" className="text-lg font-bold">Home</a>  {/* Home Link */}
          <a href="/products" className="text-lg font-bold">Products</a>  {/* Products Link */}
          <a href="/about" className="text-lg font-bold">About</a>  {/* About Link */}
          <a href="/contact" className="text-lg font-bold">Contact</a>  {/* Contact Link */}
        </div>
      </div>

      {/* Center: Title (Responsive text alignment) */}
      <h1 className="text-lg font-bold text-center sm:mt-4 md:mt-0">Shopping Cart</h1>

      {/* Right section: Cart Icon */}
      <div className="relative">
        <div onClick={() => setShowCart(!showCart)} className="cursor-pointer flex items-center">
          <FiShoppingCart size={24} />  {/* Shopping Cart Icon */}
          <span className="ml-1 text-sm bg-red-500 rounded-full px-2 py-1">{cartItems.length}</span>  {/* Cart Item Count */}
        </div>
        {showCart && <Cart cartItems={cartItems} />}  {/* Show cart when clicked */}
      </div>
    </nav>
  );
}

export default Navbar;
