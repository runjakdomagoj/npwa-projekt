import React, { useState, useEffect } from "react";
import { fetchData } from "../api/api";

const Home = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const data = await fetchData();
            console.log("Fetched data:", data);
            setProducts(data);
         } catch (error) {
            console.error("Error while fetching the data: ", error);
         }
      };

      getProducts();
   }, []);

   const mappedProducts = products.map((product) => {
      return <li key={product._id}>{product.name}</li>;
   });

   return (
      <div>
         <ul>{mappedProducts}</ul>
      </div>
   );
};

export default Home;
