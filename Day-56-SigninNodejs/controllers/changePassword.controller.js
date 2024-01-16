const { object, string, number } = require("yup");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const model = require("../models/index");
const User = model.User;
const Device = model.Device;
const checkToken = require("../middleware/checkToken.middleware");
const { where } = require("sequelize");
module.exports = {
  changePassword: async(req, res) => {
    let check = true;
    const token = req.session.tokenUser;
    if (token) {
      const device = await Device.findOne({
        where: {
          token: token,
        },
      });
      if (!device || !device.status) {
        check = false;
      }
      // console.log("check", check);
    }

    if (!check) {
      return res.redirect("/");
    }
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
            // req.session.logIn = false;
            //Logout all device
            // const devices = Device.findAll({
            //   where: {
            //     user_id: id
            //   }
            // });
            await Device.update({ status: false }, { where: { user_id: id } });
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
