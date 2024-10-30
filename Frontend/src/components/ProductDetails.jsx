import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../api/api";

const ProductDetails = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null);

   useEffect(() => {
      const getProduct = async () => {
         try {
            const data = await fetchProductDetails(id);
            setProduct(data);
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
         <p>Vrsta piva: {product.type}</p>
      </div>
   );
};

export default ProductDetails;
