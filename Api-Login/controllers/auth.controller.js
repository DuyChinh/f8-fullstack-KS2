const { User } = require("../models/index");
module.exports = {
    login: async(req, res) => {
        // const user = await User.findAll();
        // console.log(user);
        const error = req.flash("error");
        // console.log(error);
        res.render("auth/login", { error });
    }
}