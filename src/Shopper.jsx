import React, { useState } from 'react';
import './index.css';
import { FaTruck, FaUndo, FaLock, FaShoppingBag } from "react-icons/fa";
import Time from './Time.jsx';
import Reviws from './Reviws.jsx';
import Gallery from './Gallery.jsx';
import Footer from './public/Footer.jsx';
import App from './App.jsx';
import Grid from './Grid.jsx';
import Wmk from './wmk.jsx';

import Heade from './Heade.jsx';
import Top from './Top.jsx';



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
   <div>
   <Heade/>

<Wmk/>

<Grid/>


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

 <Top/>
 <Time/>
    <Reviws/>
    <Gallery/>
    <Footer/>
    
    </div>
    
  );
};

export default Shopper;
