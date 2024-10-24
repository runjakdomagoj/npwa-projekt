import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./screens/Home";
import ProductDetails from "./components/ProductDetails";

const App = () => {
   return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
   );
};

export default App;
