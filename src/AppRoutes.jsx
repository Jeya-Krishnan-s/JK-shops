import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from "./page/Men";
import Women from "./page/Women";
import Shopper from "./Shopper";
import Jewelery from "./page/Jewelery";
import Mainlast from "./lastpage/Mainlast"; // Component for dynamic product details

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shopper />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/jwel" element={<Jewelery />} />
        <Route path="/main/:id" element={<Mainlast />} /> {/* Dynamic Route */}
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
