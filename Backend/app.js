const express = require("express");
const connectDB = require("./Config/db");
const productRoute = require("./Routes/productRoute");
const manufacturerRoute = require("./Routes/manufacturerRoute");
const userRoute = require("./Routes/userRoute");
const cors = require("cors");
require("dotenv").config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/manufacturer", manufacturerRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
