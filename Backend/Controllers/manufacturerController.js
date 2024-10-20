const Manufacturer = require("../Models/Manufacturer");

const getManufacturers = async (req, res) => {
   try {
      const manufacturers = await Manufacturer.find();
      res.json(manufacturers);
   } catch (error) {
      res.status(500).json({ message: "Server error" });
   }
};

const createManufacturer = async (req, res) => {
   const { name, city, country, about, founded } = req.body;
   try {
      const newManufacturer = new Manufacturer({
         name,
         city,
         country,
         about,
         founded,
      });
      await newManufacturer.save();
      res.status(201).json(newManufacturer);
   } catch (error) {
      res.status(400).json({
         message: "Error while creating new manufacturer.",
      });
   }
};

module.exports = { getManufacturers, createManufacturer };