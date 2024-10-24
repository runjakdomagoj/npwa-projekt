import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
   return (
      <li>
         <Link to={`/products/${product._id}`}>{product.name}</Link>
      </li>
   );
};

export default Product;
