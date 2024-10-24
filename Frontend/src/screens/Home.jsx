import React, { useState, useEffect } from "react";
import { fetchData } from "../api/api";
import Product from "../components/Product";

const Home = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const getProducts = async () => {
         try {
            const data = await fetchData();
            console.log("Fetched data:", data); // Trebalo bi kasnije obrisati da kod bude čist
            setProducts(data);
         } catch (error) {
            console.error("Error while fetching the data: ", error);
         }
      };

      getProducts();
   }, []);

   const mappedProducts = products.map((product) => {
      return <Product key={product._id} product={product} />;
   });

   return (
      <div className="p-6">
         <h1 className="text-3xl font-bold text-center mb-6">Popis Piva</h1>
         <ul>{mappedProducts}</ul>
      </div>
   );
};

export default Home;
