const express = require("express")
const router = express.Router();
const {products,addproducts,cart_bucket, carts }=require("./../controller/products")

// get cards
router.post('/products', addproducts);
router.get("/products", products);
router.post("/addTocart", cart_bucket);
router.get("/cart_bucket",carts)
module.exports = router;

