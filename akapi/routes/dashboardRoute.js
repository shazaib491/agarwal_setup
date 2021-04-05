const express = require("express");
const { getDashbaord } = require("../controller/dashboard");
const auth = require("../middlewares/auth");
const router = express.Router();


router.get("/getData",auth, getDashbaord)


module.exports = router;