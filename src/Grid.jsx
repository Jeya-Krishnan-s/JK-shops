import React from "react";

const Grid = () => {
  return (
    <div>
      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* First Div */}
        <div className="w-full sm:w-72 md:w-[500px] lg:w-72 h-96 relative group">
          <img
            src="https://i.pinimg.com/736x/73/5b/97/735b97b40c82590d86d0a5cbaf7ae446.jpg"
            alt="Bag Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <h2 className="text-3xl font-bold text-white">Bag Collection</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Second Div */}
        <div className="w-full sm:w-72 md:w-[500px] lg:w-[800px] h-96 relative group">
          <img
            src="https://i.pinimg.com/736x/32/21/a2/3221a2c7687b5493cf443c462c63bd86.jpg"
            alt="Printed Men's Shirt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <h2 className="text-3xl font-bold text-white">
              Printed Men's Shirt
            </h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold py-2 px-4 rounded-full">
            Save 
            <h1>30%</h1>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-8 pt-5">
        {/* Third Div */}
        <div className="w-full sm:w-72 md:w-[500px] lg:w-[800px] h-96 relative group">
          <img
            src="https://i.pinimg.com/736x/d4/85/83/d4858399575c93ffcbfdb58bc91906f3.jpg"
            alt="Basic Women's Dresses"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <h2 className="text-3xl font-bold text-white">
              Basic Women's Dresses
            </h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Fourth Div */}
        <div className="w-full sm:w-72 md:w-[500px] lg:w-72 h-96 relative group">
          <img
            src="https://i.pinimg.com/736x/c5/24/30/c5243084b4a6442b932f3d042cfa2353.jpg"
            alt="Sweatshirts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <h2 className="text-3xl font-bold text-white">Sweatshirts</h2>
            <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
