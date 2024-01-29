var express = require("express");
var router = express.Router();
const linkController = require("../controllers/link.controller");

router.get("/compactLink", linkController.index);
router.post("/compactLink", linkController.handleCompact);

router.post("/delete/:id", linkController.delete);



router.get("/edit/:id", linkController.edit);
router.post("/edit/:id", linkController.handleEdit);
// router.get("/shareFb/:id", linkController.share);


// router.get("/secure", linkController.redirect);


module.exports = router;
