const model = require("../models/index");
const Role = model.Role;
module.exports = {
  index: async(req, res) => {
    // const error = req.flash("error");
    const roles = await Role.findAll();
    return res.render("role/index", { roles });
  },

//   addRole: async(req, res) => {
//     await Role.create({name:  req.body.role});
//     return res.redirect("/role");
//   },

  add: (req, res)=> {
    res.render("role/add");
  },

  handleAdd: async(req, res) => {
    const body = req.body;
    const name = body.role;
    const permission = body.permission;
  },

  deleteRole : async(req, res) => {
    const id = req.params.id;
    console.log(id);
    await Role.destroy({
      where: {
        id: id,
      },
    });
    return res.redirect("/role");
  }
};