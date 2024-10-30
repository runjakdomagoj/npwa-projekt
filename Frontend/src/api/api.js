import axios from "axios";

const PRODUCTS_URL = "http://localhost:5001/api/products";
const USER_URL = "http://localhost:5001/api/users";

export const fetchData = async () => {
  try {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`${PRODUCTS_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details: ", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${USER_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error while trying to register: ", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${USER_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error while trying to log in: ", error);
    throw error;
  }
};
