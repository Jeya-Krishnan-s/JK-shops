import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import { toggleCartVisibility, removeFromCart } from "./Redux/cartSlice"; // Ensure correct path

const Heade = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartVisible = useSelector((state) => state.cart.isCartVisible);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-white text-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Shopper</h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu} // Toggle menu on mobile screens
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-6 mx-auto">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Catalog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Shop</a></li>
            <li><a href="#" className="hover:text-yellow-400">Pages</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Docs</a></li>
          </ul>

          {/* Desktop Icons */}
          <div className="hidden md:flex space-x-6">
            <button className="hover:text-yellow-400">
              <FaSearch size={20} />
            </button>
            <button className="hover:text-yellow-400">
              <FaUser size={20} />
            </button>
            <button className="hover:text-yellow-400">
              <FaHeart size={20} />
            </button>
            <button
              onClick={() => dispatch(toggleCartVisibility())}
              className="relative"
            >
              <AiOutlineShoppingCart size={30} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Toggled) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 mt-2">
            <ul className="flex flex-col items-center space-y-4">
              {/* Text Menu Items */}
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Catalog</a></li>
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Shop</a></li>
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Pages</a></li>
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Blog</a></li>
              <li><a href="#" className="text-xl text-black hover:text-yellow-400">Docs</a></li>

              {/* Icons in Mobile Menu (Column Format) */}
              <li>
                <button className="flex items-center space-x-2">
                  <FaSearch size={20} />
                </button>
              </li>
              <li>
                <button className="flex items-center space-x-2">
                  <FaUser size={20} />
                </button>
              </li>
              <li>
                <button className="flex items-center space-x-2">
                  <FaHeart size={20} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => dispatch(toggleCartVisibility())}
                  className="flex items-center space-x-2"
                >
                  <AiOutlineShoppingCart size={20} />
                  {cart.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="bg-black text-center py-4 mt-8">
        <div className="flex items-center justify-center text-white text-lg">
          <i className="fas fa-bolt text-yellow-400 text-2xl mx-2"></i>
          <span>Happy Holiday Deals on Everything</span>
          <i className="fas fa-bolt text-yellow-400 text-2xl mx-2"></i>
        </div>
      </div>

      {/* Cart Panel */}
      {isCartVisible && (
        <div className="fixed top-0 right-0 h-full bg-gray-100 shadow-lg p-4 w-72 z-50 transition-transform transform translate-x-0">
          <button
            onClick={() => dispatch(toggleCartVisibility())}
            className="text-red-500 text-lg mb-4"
          >
            Close
          </button>
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {cart.length > 0 ? (
              <>
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
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {/* Total Amount */}
                <div className="mt-4 border-t pt-2">
                  <h3 className="text-lg font-semibold">
                    Total: $$ 
                    {cart
                      .reduce((total, item) => total + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </h3>
                </div>
              </>
            ) : (
              <p className="text-gray-600">Your cart is empty.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Heade;
