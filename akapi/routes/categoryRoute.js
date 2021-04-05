const express = require('express');
const { addCategorybyId,getCategory,getProduct } = require('../controller/category');
const router = express();


router.post("/product",addCategorybyId);
router.get("/product",getCategory);
router.get("/productdetail",getProduct);


module.exports=router;

