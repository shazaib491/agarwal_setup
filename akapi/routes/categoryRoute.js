const express = require('express');
const { addCategorybyId,getCategory,getProduct,getStock,getCategoryByStock,getProductByStock,getProductByCategory } = require('../controller/category');
const router = express();


router.post("/product",addCategorybyId);
router.get("/product",getCategory);
router.get("/productdetail",getProduct);
router.get("/getStock",getStock);
router.get("/getCategoryByStock",getCategoryByStock);
router.get("/getProductByStock",getProductByStock);
router.get("/getCategoryByProduct",getProductByCategory);


module.exports=router;

