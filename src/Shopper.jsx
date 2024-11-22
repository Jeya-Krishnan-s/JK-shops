import React, { useState } from 'react';
import './index.css';
import { FaTruck, FaUndo, FaLock, FaShoppingBag } from "react-icons/fa";
import Time from './Time.jsx';
import Reviws from './Reviws.jsx';
import Gallery from './Gallery.jsx';
import Footer from './public/Footer.jsx';
const Shopper = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const items = [
    { 
      category: 'Shoes', 
      name: 'Leather mid-heel Sandals', 
      price: '$129.00', 
      imgSrc: 'https://i.pinimg.com/236x/44/a6/40/44a640b3301094a681ebb61f4dc3a610.jpg', // Example image URL
    },
    { 
      category: 'Dresses', 
      name: 'Cotton floral print Dress', 
      price: '$40.00', 
      sale: true,
      imgSrc: 'https://www.jaipuriadaah.com/cdn/shop/files/DSC_4076copy_600x.jpg?v=1719492417', // Example image URL
    },
    { 
      category: 'Shoes', 
      name: 'Leather Sneakers', 
      price: '$85.00', 
      sale: true,
      imgSrc: 'https://blackberrys.com/cdn/shop/files/textured-leather-sneakers-in-black-quel-blackberrys-clothing-1.jpg?v=1685955622', // Example image URL
    },
    { 
      category: 'Tops', 
      name: 'Cropped cotton Top', 
      price: '$29.00', 
      imgSrc: 'https://5.imimg.com/data5/ANDROID/Default/2022/12/DS/OA/YD/23489471/product-jpeg-500x500.jpg', // Example image URL
    },
  ];
  const cart = [
    { 
      category: 'Dresses', 
      name: 'Floral print midi Dress', 
      price: '$50.00', 
      sale: true,
      imgSrc: 'https://rukminim2.flixcart.com/image/850/1000/kzsqykw0/kids-dress/e/6/u/5-6-years-gk052ak5-6baby-mh-modern-original-imagbq7sjnz8xe96.jpeg?q=20&crop=false', 
    },
    { 
      category: 'Bags', 
      name: 'Suede cross body Bag', 
      price: '$79.00', 
      sale: true,
      imgSrc: 'https://media.phase-eight.com/image/upload/b_rgb:FFFFFF,c_fill,dpr_2.0,f_auto,g_auto,h_700,q_auto,w_500/fl_keep_dar/c_fill,h_700,w_500/v1/p8-catalog/images/705515120/705515120-05-suede-leather-cross-body-bag?pgw=1&_i=AG', 
    },
    { 
      category: 'Skirts', 
      name: 'Printed A-line Skirt', 
      price: '$79.00', 
      new: true,
      imgSrc: 'https://cdn.shopify.com/s/files/1/1754/6207/files/e1adbab4-0402-482a-8efb-26587f1ea9fd.jpg.webp?v=1720809795', 
    },
    { 
      category: 'Shoes', 
      name: 'Heel strappy Sandals', 
      price: '$90.00', 
      imgSrc: 'https://assets.ajio.com/medias/sys_master/root/20221122/A85U/637ced57f997ddfdbd8ef4ac/-473Wx593H-469313237-black-MODEL2.jpg', 
    },
  ];
  

  return (
    <div className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Shopper on the Left */}
        <h1 className="text-xl font-bold">Shopper</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex justify-center space-x-6 mx-auto">
          <li>
            <a href="#" className="hover:text-yellow-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">Catalog</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">Shop</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">Pages</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">Docs</a>
          </li>
        </ul>

      
        <div className="hidden md:flex space-x-6">
          <button className="hover:text-yellow-400">
            <i className="fas fa-search w-6 h-6"></i>
          </button>
          <button className="hover:text-yellow-400">
            <i className="fas fa-user w-6 h-6"></i>
          </button>
          <button className="hover:text-yellow-400">
            <i className="fa-regular fa-heart w-6 h-6"></i>
          </button>
          <button className="hover:text-yellow-400" id="cartsup">
            <i className="fa-solid fa-cart-shopping w-6 h-6"></i>
            <sup>2</sup>
          </button>
        </div>
      </div>


      <div className="md:hidden flex items-center justify-end">
        <button
          className="text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>


      <ul
        className={`md:hidden flex flex-col space-y-4 mt-4 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Catalog
          </a>
        </li>
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Pages
          </a>
        </li>
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="block text-center hover:text-yellow-400">
            Docs
          </a>
        </li>
      </ul>

      <div
        className={`md:hidden flex space-x-6 mt-4 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <button className="hover:text-yellow-400">
          <i className="fas fa-search w-6 h-6"></i>
        </button>
        <button className="hover:text-yellow-400">
          <i className="fas fa-user w-6 h-6"></i>
        </button>
        <button className="hover:text-yellow-400">
          <i className="fas fa-fire w-6 h-6"></i>
        </button>
        <button className="hover:text-yellow-400">
          <i className="fas fa-shopping-cart w-6 h-6"></i>
        </button>
      </div>
   
    
    

      <div className="bg-black text-center py-4 mt-8">
      <div className="flex items-center justify-center text-white text-lg">
     
        <i className="fas fa-bolt text-yellow-400 text-2xl mx-2"></i>
        
      
        <span>Happy Holiday Deals on Everything</span>
        
      
        <i className="fas fa-bolt text-yellow-400 text-2xl mx-2"></i>
      </div>
    </div>

    <div className="min-h-screen bg-gray-100">

  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-4  bg-white">
    {[
      {
        title: "Women",
        image: "https://i.pinimg.com/736x/ef/e7/d6/efe7d672a5b27768da2dc6309bf0cc7e.jpg",
        btn: "Shop Women",
      },
      {
        title: "Men",
        image: "https://i.pinimg.com/736x/3b/2f/0d/3b2f0d65a2313fac9f8b2c0538ecd992.jpg",
        btn: "Shop Men",
      },
      {
        title: "Kids",
        image: "https://i.pinimg.com/736x/9b/95/3c/9b953c4d46574f323d0fc0dc0483d1ff.jpg",
        btn: "Shop Kids",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="relative h-96 bg-cover bg-center group"
        style={{ backgroundImage: `url(${item.image})` }}
      >
     
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white transition-all duration-300 group-hover:bg-gray-600 group-hover:bg-opacity-60">
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <button className="mt-4 px-6 py-2 bg-white text-black font-medium rounded">
            {item.btn} <i class="fa-solid fa-arrow-right" id='arr'></i>
          </button>
        </div>
      </div>
    ))}
  </div>


  <div className="bg-white flex flex-col justify-center items-center text-center">
  
      <div className="bg-white py-8 text-center" >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center px-4 "id='bott'>
          {[
            {
              icon: <FaTruck className=" text-red-500 mr-40" id='truck'/>,
              title: "FREE SHIPPING",
              desc: "From all orders over $100",
            },
            {
              icon: <FaUndo className=" text-red-500 mr-40" id='truck' />,
              title: "FREE RETURNS",
              desc: "Return money within 30 days",
            },
            {
              icon: <FaLock className=" text-red-500 mr-40" id='truck' />,
              title: "SECURE SHOPPING",
              desc: "You're in safe hands",
            },
            {
              icon: <FaShoppingBag className=" text-red-500 mr-40" id='bag' />,
              title: "OVER 10,000 STYLES",
              desc: "We have everything you need",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {item.icon}
              <h3 className=" font-semibold ">{item.title}</h3>
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

</div><div className="parent grid grid-cols-1 md:grid-cols-2 gap-4 relative">

  <div className="div1 relative group">
    <img
      src="https://i.pinimg.com/736x/73/5b/97/735b97b40c82590d86d0a5cbaf7ae446.jpg"
      alt="Bag Collection"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center opacity-100 transition">
      <h2 className="text-3xl font-bold text-white">Bag Collection</h2>
      <button className="mt-4 px-6 py-2 text-black font-medium rounded">
        Shop Now <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>

 
  <div className="div2 relative group">
    <img
      src="https://i.pinimg.com/736x/32/21/a2/3221a2c7687b5493cf443c462c63bd86.jpg"
      alt="Printed Men's Shirt"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center  transition">
      <h2 className="text-3xl font-bold text-black">Printed Men's Shirt</h2>
      <button className="mt-4 px-6 py-2 text-black font-medium rounded">
        Shop Now <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold py-4 px-6 
    rounded-full">
      Save 
      <h1>30%</h1>
    </div>
  </div>
</div>

<div className="twoparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
 
  <div className="div3 relative group hover:animate-shake">
    <img
      src="https://i.pinimg.com/736x/d4/85/83/d4858399575c93ffcbfdb58bc91906f3.jpg"
      alt="Image 3"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center  transition">
      <h2 className="text-3xl font-bold text-black">Basic Women's Dresses</h2>
      <button className="mt-4 px-6 py-2  text-black font-medium rounded">
        Shop Now <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>

 
  <div className="div4 relative group hover:animate-shake">
    <img
      src="https://i.pinimg.com/736x/c5/24/30/c5243084b4a6442b932f3d042cfa2353.jpg"
      alt="Image 4"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center  transition">
      <h2 className="text-3xl font-bold text-white">Sweatshirts</h2>
      <button className="mt-4 px-6 py-2  text-black font-medium rounded">
        Shop Now <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  </div>
</div>


    <div className="flex flex-col items-center space-y-4 mt-8">
      <h1 className="text-2xl font-bold">Top Month Sellers</h1>
      <ul className="flex justify-center space-x-6">
        <li>
          <a href="#" className="hover:text-yellow-400">Home</a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400">Catalog</a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-400">Shop</a>
        </li>
      </ul>
    </div>
    <div className="flex flex-wrap justify-center space-x-6 space-y-6 mt-10">
      {items.map((item, index) => (
        <div key={index} className="w-64 p-4 flex flex-col items-center text-center">
          <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{item.category}</h2>
          <h3 className="text-md mt-2">{item.name}</h3>
          <p className="text-sm mt-1 text-gray-500">{item.price}</p>
         
        </div>
      ))}
    </div>
    <div className="flex flex-wrap justify-center space-x-6 space-y-6 mt-10">
      {cart.map((item, index) => (
        <div key={index} className="w-64 p-4  flex flex-col items-center text-center">
          <img src={item.imgSrc} alt={item.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-2">{item.category}</h2>
          <h3 className="text-md mt-2">{item.name}</h3>
          <p className="text-sm mt-1 text-gray-500">{item.price}</p>
        
        </div>
      ))}
    </div>
    <Time/>
    <Reviws/>
    <Gallery/>
    <Footer/>
    </div>
    </div>
  );
};

export default Shopper;
