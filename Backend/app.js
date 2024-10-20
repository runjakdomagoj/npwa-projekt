const express = require("express");
const connectDB = require("./Config/db");
const productRoute = require("./Routes/productRoute");
const manufacturerRoute = require("./Routes/manufacturerRoute");
const userRoute = require("./Routes/userRoute")
require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/manufacturer", manufacturerRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 500;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});
