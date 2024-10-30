import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being sent:", formData); // Logiranje podataka
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (error) {
      console.error("Error while trying to register: ", error);
      if (error.response) {
        console.error("Server response data:", error.response.data);
      }
    }
  };  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
