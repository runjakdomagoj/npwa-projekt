const Manufacturer = require("./Models/Manufacturer");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./Config/db");

connectDB();

const pivovaraMedvedgrad = new Manufacturer({
   name: "Pivovara Medvedgrad",
   city: "Zagreb",
   country: "Hrvatska",
   about: "Mi smo obiteljska craft pivovara koja desetljećima kuha ukusne i prirodne lagere za ljude koji na život i na pivo gledaju pozitivno. U dinamičnom i promjenjivom okruženju pružamo trajne pivske vrijednosti.",
   founded: 1994,
});

pivovaraMedvedgrad
   .save()
   .then(() => {
      console.log("Manufacturer data added to the database.");
      mongoose.connection.close();
   })
   .catch((error) => {
      console.error(error);
      mongoose.connection.close();
   });
