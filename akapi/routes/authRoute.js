const express = require("express");
const { register, login, loggedIn, logout } = require("../controller/auth");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/loggedIn", loggedIn)
router.get("/logout", logout)


module.exports = router;