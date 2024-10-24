const express = require("express");
const router = express.Router();
const {
   getProducts,
   getProductWithId,
   createProduct,
} = require("../Controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProductWithId);
router.post("/", createProduct);

module.exports = router;
