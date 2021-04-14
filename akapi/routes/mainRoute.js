const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const { products, addproducts, cart_bucket, carts, deleteCarts, orders, shippindDetail, totalExpenses } = require("./../controller/products")

// get cards
router.post('/products', addproducts);
router.get("/products", products);
router.post("/addTocart",auth, cart_bucket);
router.get("/cart_bucket",auth, carts)
router.delete("/deleteCart", deleteCarts)
router.post("/orders", auth, orders)
router.get("/shipping", auth, shippindDetail);
router.get("/expenses", auth, totalExpenses);
module.exports = router;

