const { User } = require("../models/index");
module.exports = {
    index: (req, res) => {
        res.render("link/index");
        // res.send("vào");
    }
}