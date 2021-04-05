const express = require("express")
const router = express.Router();
const {products,addproducts }=require("./../controller/products")

// get cards
router.post('/products', addproducts);
router.get("/products", products);
module.exports = router;

