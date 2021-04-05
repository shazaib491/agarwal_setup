const express = require("express")
const router = express.Router();
const { addQuery } = require("./../controller/enquiry");

// get cards
router.post('', addQuery);
module.exports = router;

