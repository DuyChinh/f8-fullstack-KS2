const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const model = require("../models/index");
const { Op } = require("sequelize");
const User = model.User;
module.exports = {
  index: (req, res) => {},
  signUp: (req, res) => {
    const msgRegister = req.flash("msg-register");
    // if(req.session.logIn) {
    //     res.redirect("/");
    // }
    res.render("signup/index", { req, msgRegister });
  },
  handleSignUp: async(req, res) => {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(confirmPassword," ", password);
    const email = req.body.email;
    const body = await req.validate(req.body, {
      email: string()
        .required("Please enter email!")
        .email("Invalid email format!")
        .test("check-unique", "Email already exists!", async (value) => {
          // console.log("value", value);
          const existingUser = await User.findAll({
            where: {
              email: value,
            },
          });
          // console.log("existingUser", existingUser);
          return existingUser.length === 0;
        }),
      password: string()
        .min(6, "Please enter a password of at least 6 characters.")
        .required("Please enter password!"),
      confirmPassword: string().required("Please enter password!"),
    });
    if(body && password === confirmPassword) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        const username = email.split("@")[0];
        await User.create({
            name: username,
            email: email,
            password: hash,
        });
        req.flash("msg-register", "Register successful! Please Sign in!");
        return res.redirect("/signin");
    }
    if (password !== confirmPassword) {
      req.flash("msg-register", "passwords do not match!Please check confirm password again!");
    }
    res.redirect("/signup");
  }
};
