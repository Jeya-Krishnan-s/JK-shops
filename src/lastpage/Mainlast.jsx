import React from "react";
import { useParams } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import Heade from "../Heade";
import Footer from "../public/Footer";
import Wmclothes from "../Apii/Wmcolthes";
import Reviw from "../Reviws/Reviw";



const Mainlast = () => {
  const { id } = useParams(); // Extract the dynamic `id` from the URL

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Heade/>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pass the product ID as a prop if needed */}
          <ProductImage productId={id} />
          <ProductDetails productId={id} />
         
        </div>
     
      </div>
     <Wmclothes/>
     <Reviw/>
      <Footer/>
    </div>
  );
};

export default Mainlast;
