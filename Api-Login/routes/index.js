var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { req });
});

router.get("/profile", userController.getProfile);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);

router.patch("/users/:id", userController.update);

router.delete("/users/:id", userController.delete);




module.exports = router;
