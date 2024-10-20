const Product = require("../Models/Product");

const getProducts = async (req, res) => {
   try {
      const products = await Product.find().populate("manufacturer");
      res.json(products);
   } catch (error) {
      res.status(500).json({ message: "Server error" });
   }
};

const createProduct = async (req, res) => {
   const { name, price, alcoholPercentage, type, manufacturer } = req.body;
   try {
      const newProduct = new Product({
         name,
         price,
         alcoholPercentage,
         type,
         manufacturer,
      });
      await newProduct.save();
      res.status(201).json(newProduct);
   } catch (error) {
      res.status(400).json({ message: "Error while creating new product." });
   }
};

module.exports = { getProducts, createProduct };
