var express = require("express");
var router = express.Router();
const linkController = require("../controllers/link.controller");

router.get("/compactLink", linkController.index);

module.exports = router;
