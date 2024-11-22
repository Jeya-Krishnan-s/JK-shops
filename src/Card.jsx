import React from 'react';
import './index.css';
const Card = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-[#3a7bd5] to-[#00d2ff] min-h-screen py-8">
      <div className="bg-blue-100 rounded-lg max-w-sm p-8 shadow-lg relative z-10 mb-8">
        <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#1abc9c] flex justify-center items-center focus:outline-none hover:shadow-md active:shadow-inner transition-all">
          <svg
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </button>
        <img
          src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
          alt="Visa Logo"
          className="w-12 mx-auto mb-4"
        />
        <label className="text-sm text-white opacity-60">Card number:</label>
        <input
          type="text"
          placeholder="1234 5678 9101 1121"
          className="block w-full bg-transparent border-b border-gray-500 text-lg text-gray-300 mt-1 mb-3 focus:outline-none focus:border-[#1abc9c] transition-all"
        />
        <label className="text-sm text-white opacity-60">Name:</label>
        <input
          type="text"
          placeholder="Edgar Pérez"
          className="block w-full bg-transparent border-b border-gray-500 text-lg text-gray-300 mt-1 mb-3 focus:outline-none focus:border-[#1abc9c] transition-all"
        />
        <div className="flex items-center">
          <label className="text-sm text-white opacity-60 mr-2">CCV:</label>
          <input
            type="text"
            placeholder="321"
            className="bg-transparent border-b border-gray-500 w-14 text-lg text-gray-300 focus:outline-none focus:border-[#1abc9c] transition-all"
          />
        </div>
      </div>

      <div className="bg-gray-300 rounded-lg p-6 w-full max-w-lg shadow-md -mt-24 z-0 relative">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-700">Cost:</p>
            <h2 className="text-[#3a7bd5] text-2xl">$400</h2>
          </div>
          <div>
            <p className="text-gray-700">Name:</p>
            <h2 className="text-[#3a7bd5] text-2xl">Codedgar</h2>
          </div>
        </div>
        <div className="border-t border-gray-400 pt-4">
          <p className="text-gray-700">Bought Items:</p>
          <div className="mb-4">
            <h3 className="text-gray-800 text-lg">Corsair Mouse</h3>
            <p className="text-gray-600 text-sm">Gaming mouse with shiny lights</p>
            <p className="text-gray-500 text-xs">$200 (50% discount)</p>
          </div>
          <div>
            <h3 className="text-gray-800 text-lg">Gaming keyboard</h3>
            <p className="text-gray-600 text-sm">Look mommmy, it has colors!</p>
            <p className="text-gray-500 text-xs">$200 (50% discount)</p>
          </div>
        </div>
        <p className="text-center text-gray-600 mt-6">This information will be sent to your email</p>
      </div>
    </div>
  );
};

export default Card;
