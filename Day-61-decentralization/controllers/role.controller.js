const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;
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
    let permission = body.permission;
    if (!name) {
    //   req.flash("errName", "Vui lòng nhập trường này!");
      return res.redirect("/role/add");
    }

    const role = await Role.findOne({
      where: { name },
    });

    if (role) {
    //   req.flash("errName", "Role đã tồn tại!");
      return res.redirect("/role/add");
    }

    try {
      const newRole = await Role.create({
          name,
      });
    } catch {
      throw(error);
    }
    if (!permission) {
        permission = [];
        // req.flash("success", "Thêm role thành công!");
        return res.redirect("/role");
    }

    if (!Array.isArray(permission)) {
        permission = [permission];
    }

    const permissions = permission;

    for (const permission of permissions) {
      let permissionValue = await Permission.findOne({
        where: { value: permission },
      });
      if (!permissionValue) {
        permissionValue = await Permission.create({
          value: permission,
        });
      }
      const newR = await newRole.addPermission(permissionValue);
    //   console.log(newR);
    }
    // req.flash("success", "Thêm role thành công!");
    return res.redirect("/role");
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
  },

  editRole: async(req, res) => {
    const id = req.params.id;
    // const role = await Role.findByPk(id);
    // console.log(role);
    
    const role = await Role.findByPk(id, {
      include: [
        {
          model: Permission,
          as: "permissions",
        },
      ],
    });
    if (!role) {
      return res.render("role/error");
    }
    const roles = await Role.findAll({ order: [["name", "asc"]] });
    res.render("role/edit", {
      permissions: role.permissions,
      name: role.name,
      roles,
      id,
    });
  },

  handleEditRole: async(req, res) => {
    const body = req.body;
    const name = body.role;
    let permission = body.permission;
    const id = req.params.id;
    console.log(name, permission, id);

    const role = await Role.findByPk(id);
    // console.log(role);
    if(!role) {
        return res.render("role/error");
    }

    if(!permission) {
      await role.setPermissions([]);
      return res.redirect("/role");
    }

    try {

      await Role.update(
        { name },
        {
          where : {
            id
          }
        }
      )
    } catch {
      console.log("error update!");
      throw(error);
    }

    if (!Array.isArray(permission)) {
      permission = [permission];
    }
    const permissions = permission;
    console.log("permissions",permissions);

    const permissionArr = [];
    for (const per of permissions) {
      let p = await Permission.findOne({ where: { value: per } });
      if (!p) {
        p = await Permission.create({
          value: per,
        });
      }
      permissionArr.push(p);
    }

    // console.log("permission Arr", permissionArr);
    const newR = await role.setPermissions(permissionArr);
    // console.log("setPermission",newR);
    return res.redirect("/role");
  }
};