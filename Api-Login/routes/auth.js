var express = require("express");
var router = express.Router();
var passport = require("passport");
// console.log("đay la router");
 
const authController = require("../controllers/auth.controller");
router.get("/login", authController.login);

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
}));

router.get(
  "/github",
  passport.authenticate("github"),
);


router.get(
  "/github/callback",
  passport.authenticate(
    "github",
    {
      failureRedirect: (req, res) => {
        res.json({
          status: "505",
          message: "Server Error",
        })
      },
      failureFlash: true,
    }),
    function (req, res) {
      // Successful authentication, redirect home.
      return res.json({
        name: req.user.name,
        email: req.user.email,
        urlAvatar: req.user.urlAvatar,
        accessToken: req.user.accessToken,
      });
      // res.redirect("/");
    }
  )
;

router.get("/google", passport.authenticate("google"));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: (req, res) => {
      res.json({
        status: "505",
        message: "Server Error",
      });
    },
    failureFlash: true,
  }),
  function (req, res) {
    console.log(req.user);
    return res.json({
      name: req.user.name,
      email: req.user.email,
      urlAvatar: req.user.urlAvatar,
      accessToken: req.user.accessToken,
    });
    // Successful authentication, redirect home.
    // res.redirect("/");
  }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {});
    return res.redirect("/auth/login");
});




module.exports = router;