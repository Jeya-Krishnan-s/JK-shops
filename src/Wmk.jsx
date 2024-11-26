import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaTruck, FaUndo, FaLock, FaShoppingBag } from "react-icons/fa";

const Wmk = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-4 bg-white">
          {[ 
            {
              title: "Women",
              image: "https://i.pinimg.com/736x/ef/e7/d6/efe7d672a5b27768da2dc6309bf0cc7e.jpg",
              btn: "Shop Women",
              link: "/Women", // Link to new route
            },
            {
              title: "Men",
              image: "https://i.pinimg.com/736x/3b/2f/0d/3b2f0d65a2313fac9f8b2c0538ecd992.jpg",
              btn: "Shop Men",
              link: "/men", // Link to new route
            },
            {
              title: "Jewelery",
              image: "https://i.pinimg.com/736x/89/c9/cc/89c9cc00472023be37abae1179cfd931.jpg",
              btn: "Shop Kids",
              link: "/jwel", // Link to new route
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative h-96 bg-cover bg-center group"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white transition-all duration-300 group-hover:bg-gray-600 group-hover:bg-opacity-60">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <Link to={item.link}>
                  <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
                    {item.btn} <i className="fa-solid fa-arrow-right" id="arr"></i>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center">
          <div className="bg-white py-8 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center px-4" id="bott">
              {[
                {
                  icon: <FaTruck className="text-red-500 mr-40" id="truck" />,
                  title: "FREE SHIPPING",
                  desc: "From all orders over $100",
                },
                {
                  icon: <FaUndo className="text-red-500 mr-40" id="truck" />,
                  title: "FREE RETURNS",
                  desc: "Return money within 30 days",
                },
                {
                  icon: <FaLock className="text-red-500 mr-40" id="truck" />,
                  title: "SECURE SHOPPING",
                  desc: "You're in safe hands",
                },
                {
                  icon: <FaShoppingBag className="text-red-500 mr-40" id="bag" />,
                  title: "OVER 10,000 STYLES",
                  desc: "We have everything you need",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  {item.icon}
                  <h3 className="font-semibold ">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center text-center p-8">
              <h5 className="text-xl font-semibold mb-4">New Collection</h5>
              <h1 className="text-3xl font-bold text-black mb-4">Best Picks 2019</h1>
              <p className="text-gray-700 max-w-xl">
                Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wmk;
