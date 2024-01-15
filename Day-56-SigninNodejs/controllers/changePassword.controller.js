const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const model = require("../models/index");
const User = model.User;
const checkToken = require("../middleware/checkToken.middleware");
module.exports = {
  changePassword: (req, res) => {
    // console.log(req.params.id);
    const msg = req.flash("msg");
    // console.log(msg);
    res.render("changePassword/index", {req, msg});
  },

  handleChangePassword: async(req, res) => {
    //  console.log(req);
    const data = req.body;
    const id = data.id;
    // console.log(body);
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const body = await req.validate(data, {
      password: string()
        .min(6, "Please enter a password of at least 6 characters.")
        .required("Please enter password!"),
      confirmPassword: string().required("Please enter password!"),
    });
    // console.log(req.errors);

   
    if(body) {
        if(password === confirmPassword) {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(password, salt);
            await User.update(
              { password: hash },
              {
                where: {
                  id: id,
                },
              }
            );
            req.session.logIn = false;
            return res.redirect("/signin");

            // req.flash("msg", "Change password successful.");
        } else {
            req.flash("msg", "Passwords do not match!Please try again!");
            // console.log(msg);
            // res.redirect("/changePassword");
            return res.redirect(req.get("referer"));

        }
        
        return res.redirect("/signin");
    }
    return res.redirect(req.get("referer"));
  },
};
