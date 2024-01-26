var express = require('express');
var router = express.Router();
const roleController = require("../controllers/role.controller");

router.get("/", roleController.index);
// router.post("/", roleController.addRole);

router.get("/add", roleController.add);
router.post("/add", roleController.handleAdd);

router.post("/delete/:id", roleController.deleteRole);



module.exports = router;