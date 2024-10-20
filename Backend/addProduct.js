const Product = require("./Models/Product");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./Config/db");

connectDB();

const pivovaraMedvedgradId = "67140082f1b6899817210079";

const products = [
   {
      name: "Zlatni Medvjed",
      price: 1.8,
      alcoholPercentage: 4.4,
      type: "Pilsner",
      manufacturer: pivovaraMedvedgradId,
   },
   {
      name: "Grička vještica",
      price: 1.95,
      alcoholPercentage: 7.5,
      type: "Jaki tamni lager",
      manufacturer: pivovaraMedvedgradId,
   },
   {
      name: "Baltazar",
      price: 2.0,
      alcoholPercentage: 5.0,
      type: "Hoppy lager",
      manufacturer: pivovaraMedvedgradId,
   },
   {
      name: "Fakin IPA",
      price: 2.3,
      alcoholPercentage: 6.5,
      type: "India Pale Ale",
      manufacturer: pivovaraMedvedgradId,
   },
   {
      name: "Crna kraljica",
      price: 1.85,
      alcoholPercentage: 4.8,
      type: "Schwarzbier",
      manufacturer: pivovaraMedvedgradId,
   },
   {
      name: "Dva klasa",
      price: 1.8,
      alcoholPercentage: 4.6,
      type: "Wiezenbier",
      manufacturer: pivovaraMedvedgradId,
   },
];

Product.insertMany(products)
   .then(() => {
      console.log("Product added to the database.");
      mongoose.connection.close();
   })
   .catch((error) => {
      console.error(error);
      mongoose.connection.close();
   });
