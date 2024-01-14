const { object, string, number } = require("yup");
const UAParser = require("ua-parser-js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const model = require("../models/index");
const { Op } = require("sequelize");
const User = model.User;
const moment = require("moment");
module.exports = {
  index: (req, res) => {
    const user = req.session.user;
    // console.log(user);
    const userArr = Array.from(user);
    // console.log(userArr[0].name);

    // console.log(user);
    if (req.session.logIn) {
      return res.render("index", { userArr, moment});
    }
    return res.redirect("/signin");
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
        req.session.user = users;
        req.session.username = users[0].name;
        req.session.logIn = true;

        let parser = new UAParser("user-agent"); // you need to pass the user-agent for nodejs
        const uastring1 = req.headers["user-agent"];
        parser.setUA(uastring1);
    
        // console.log(parser); 
        let parserResults = parser.getResult();
        console.log(parserResults);

        // const dateHeaderValue = req.headers["date"];
        const date = moment().utcOffset(7);
        const vnTime = moment(date).format("DD/MM/YYYY HH:mm:ss");
        console.log(vnTime);

       
        return res.redirect("/");
      } else { 
        if (users.length && bcrypt.compareSync(password, users[0].password) && !statusUser) {
          req.flash("msg", "Status is inactive");
          //Save info client
          
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

  forgotPassword: (req, res) => {
    res.render("forgotPassword/index");
  },

  handleForgotPassword: (req, res) => {

  },

  handleLogout: (req, res) => {
    req.session.logIn = false;
    return res.redirect("/signin");
  }
};