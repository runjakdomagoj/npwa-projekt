import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
   const { id } = useParams();
   console.log("Product ID:", id);
   const [product, setProduct] = useState(null);

   useEffect(() => {
      const getProduct = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5001/api/products/${id}`
            );
            console.log(response.data);
            //console.log("Fetching product with id:", id);
            setProduct(response.data);
         } catch (error) {
            console.error("Error while trying to get the products: ", error);
         }
      };
      getProduct();
   }, [id]);

   if (!product) return <h1>Proizvod se učitava...</h1>;

   return (
      <div>
         <h1>{product.name}</h1>
         <p> Vrsta piva: {product.type}</p>
      </div>
   );
};

export default ProductDetails;
