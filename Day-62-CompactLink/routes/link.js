var express = require("express");
var router = express.Router();
const linkController = require("../controllers/link.controller");

router.get("/compactLink", linkController.index);
router.post("/compactLink", linkController.handleCompact);

router.post("/delete/:id", linkController.delete);

router.get("/:id/qrcode", linkController.generateQr);


// router.get("/secure", linkController.redirect);


module.exports = router;
