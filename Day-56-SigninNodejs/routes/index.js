var express = require('express');
var router = express.Router();
var signInController = require("../controllers/signin.controller");
var signUpController = require("../controllers/signup.controller");
var changePasswordController = require("../controllers/changePassword.controller");
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// var checkTokenValidity = require("../middleware/checkToken.middleware");

router.get("/", signInController.index);
router.get("/signout", signInController.handleSignout);

router.post("/logout/:id", signInController.handleLogout);

router.get("/signin", signInController.signIn);
router.post("/signin", signInController.handleSignIn);

router.get("/forgotPassword", signInController.forgotPassword);
router.post("/forgotPassword", signInController.handleForgotPassword);

router.get("/changePassword/:id", changePasswordController.changePassword);
router.post("/changePassword/:id", changePasswordController.handleChangePassword);


router.get("/signup", signUpController.signUp);
router.post("/signup", signUpController.handleSignUp);


module.exports = router;
