import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "./Cart";

function Navbar({ cartItems }) {
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" bg-gradient-to-r from-green-400 to-yellow-400 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand Logo and Name */}
        
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping</span>
       

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`hidden w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <div onClick={() => setShowCart(!showCart)} className="cursor-pointer flex items-center">
            <FiShoppingCart size={24} />
            <span className="ml-1 text-sm bg-red-500 rounded-full px-2 py-1">{cartItems.length}</span>
          </div>

          {/* Cart visibility toggle */}
          {showCart && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-lg p-4 z-10">
              <Cart cartItems={cartItems} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
