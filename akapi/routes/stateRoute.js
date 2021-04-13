const express = require("express");
const router = express.Router();
const { stateController, cityController, pincodeController, areaController } = require("../controller/state");


router.get("/state", stateController);

router.get("/city", cityController);

router.get("/area", areaController);

router.get("/pincode", pincodeController);

module.exports = router;