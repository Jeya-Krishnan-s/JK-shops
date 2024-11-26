import React from "react";
import "../index.css";
import Heade from "../Heade";
import Sidebar from "../Components/Sidebar";
import Banner from "../Components/Banner";
import FilterTags from "../Components/FilterTags";

import Footer from "../public/Footer";
import Jewel from "../Apii/Jewel";
import Mainlast from "../lastpage/Mainlast";


const Men = () => {
  return (
    <div>
      <Heade />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white border-r px-4 py-6">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="">
          {/* Banner */}
          <Banner />
         

          {/* Filter Tags */}
          <div className=" flex col px-10 py-4">
            <FilterTags />

          </div>
       <Jewel/>
        </main>
     
      </div>
      <Footer/>
      
    </div>
  );
};

export default Men;
