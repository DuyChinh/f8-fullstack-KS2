const bcrypt = require("bcrypt");
const { User } = require("../models/index");
module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    res.render("auth/index", { error });
  },

  register: (req, res) => {
    return res.render("auth/register");
  },

  handleRegister: async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    await User.create({
      email,
      password: hashPassword,
      status: true,
    });
    return res.redirect("/auth/login");
  },
};
