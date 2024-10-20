const mongoose = require("mongoose");

const manufacturerSchema = new mongoose.Schema({
   name: { type: String, required: true },
   city: { type: String, required: true },
   country: { type: String, required: true },
   about: { type: String, required: true },
   founded: { type: Number, required: true },
});

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);
module.exports = Manufacturer;
