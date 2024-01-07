var express = require('express');
var router = express.Router();
var signInController = require("../controllers/signin.controller");
var signUpController = require("../controllers/signup.controller");
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", signInController.index);
router.get("/signout", signInController.handleLogout);
router.get("/signin", signInController.signIn);
router.post("/signin", signInController.handleSignIn);

router.get("/signup", signUpController.signUp);
router.post("/signup", signUpController.handleSignUp);


module.exports = router;
