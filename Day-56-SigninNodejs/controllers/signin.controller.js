const { object, string, number } = require("yup");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const model = require("../models/index");
const { Op } = require("sequelize");
const User = model.User;
module.exports = {
  index: (req, res) => {
    const username = req.session.username;
    if (req.session.logIn) {
      res.render("index", { username });
    }
    res.redirect("/signin");
  },
  signIn: (req, res) => {
    const msg = req.flash("msg");
    const msgRegister = req.flash("msg-register");
    if (req.session.logIn) {
      return res.redirect("/");
    }
    res.render("signin/index", { req, msg, msgRegister });
  },

  handleSignIn: async (req, res) => {
    const password = req.body.password;
    const body = await req.validate(req.body, {
      email: string().required("Please enter email!").email("Invalid email format!"),
      password: string().required("Please enter password!"),
    });
    if (body) {
      // res.redirect("/");
      let filters = {};
      // const salt = bcrypt.genSaltSync(saltRounds);
      // const hash = bcrypt.hashSync(req.body.password, salt);
      // console.log("hash", hash);
      filters = [
        {
          email: {
            [Op.iLike]: `%${req.body.email}%`,
          },
        },
      ];
      const users = await User.findAll({
        where: filters,
      });
      // console.log(users);
      const statusUser = users[0]?.status;
      // console.log(statusUser);
      if(users.length && bcrypt.compareSync(password, users[0].password) && statusUser) {
        // console.log("user2",users);
        req.session.username = users[0].name;
        req.session.logIn = true;
        return res.redirect("/");
      } else { 
        if (users.length && bcrypt.compareSync(password, users[0].password) && !statusUser) {
          req.flash("msg", "Status is inactive");
        } else {
          if (!users.length) {
            req.flash("msg", "Account isn't exist!");
          } else {
            req.flash(
              "msg",
              "Email or Password is incorrect. Please try again!"
            );
          }
        }
        req.session.logIn = false;
      }
    }

    return res.redirect("/signin");
  },

  handleLogout: (req, res) => {
    req.session.logIn = false;
    res.redirect("/");
  }
};