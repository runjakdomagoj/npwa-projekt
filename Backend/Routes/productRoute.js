const express = require("express");
const router = express.Router();
const {
   getProducts,
   createProduct,
} = require("../Controllers/productController");

router.get("/", getProducts);
router.post("/", createProduct);

module.exports = router;
