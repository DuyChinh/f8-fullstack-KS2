const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const model = require("../models/index");
const { Op } = require("sequelize");
const User = model.User;
module.exports = {
  index: (req, res) => {},
  signUp: (req, res) => {
    if(req.session.logIn) {
        res.redirect("/");
    }
    res.render("signup/index", { req });
  },
  handleSignUp: async(req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const body = await req.validate(req.body, {
      email: string()
        .required("Please enter email!")
        .email("Invalid email format!")
        .test("check-unique", "Email already exists!", async(value) => {
            // console.log("value", value);
            const existingUser = await User.findAll({
              where: {
                email: value,
              },
            });
            // console.log("existingUser", existingUser);
            return existingUser.length === 0;
        }),
      password: string().required("Please enter password!"),
    });
    if(body) {
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
    res.redirect("/signup");
  }
};
