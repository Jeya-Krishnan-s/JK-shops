import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-6">
      {/* Left Side */}
      <div>
        <h1 className="text-4xl font-bold">2024 Summer Collection</h1>
        <button className="mt-4 px-6 py-2 bg-black text-white rounded-md">
          View Collection →
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="w-1/2">
        <img
          src="https://i.pinimg.com/736x/bc/b5/f0/bcb5f05e36d3a3ab6ff3469b512a23d8.jpg"
          alt="Summer Collection"
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Banner;
