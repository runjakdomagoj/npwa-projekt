import axios from "axios";

const URL = "http://localhost:5000/api/products";

export const fetchData = async () => {
   try {
      const response = await axios.get(URL);
      return response.data;
   } catch (error) {
      console.error("Error fetching data: ", error);
      throw error;
   }
};
