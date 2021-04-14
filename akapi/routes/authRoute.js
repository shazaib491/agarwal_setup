const express = require("express");
const { register, login,gowdown, loggedIn, logout } = require("../controller/auth");
const router = express.Router();
const extreactFile = require("./../middlewares/file");
router.post("/register", extreactFile, register)
router.post("/login", login)
router.get("/gowdown",gowdown)
router.get("/loggedIn", loggedIn)
router.get("/logout", logout)


module.exports = router;