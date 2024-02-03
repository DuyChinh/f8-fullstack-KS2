const { User, Provider } = require("../models/index");
const bcrypt = require("bcrypt");
const { string , object } = require("yup");
module.exports = {
    getProfile: async(req, res) => {
        const response = {};
        const user = req.user;
        console.log(req.user);
        if(user) {
            response.status = 200;
            response.message = "Success";
            userData = {
              name: user.name,
              email: user.email,
              urlAvatar: user.urlAvatar,
            };
            Object.assign(response, { data: userData});
            // return res.status(response.status).json(response);
        }
        if(!user) {
            Object.assign(response, {
                status: 500,
                message: "Server Error",
            })
        }
        return res.status(response.status).json(response);
    },

    getUsers: async(req, res) => {
        const response = {};
        try {
            const users = await User.findAll({
                order: [["id", "desc"]],
            });
            Object.assign(response, {
                status: 200,
                message: "Success",
                data: users,
            });
        } catch {
            Object.assign(response, {
              status: 500,
              message: "Server Error",
            });
        }
        res.status(response.status).json(response);
    },

    getUser: async(req, res) => {
        const { id } = req.params;
        const response = {};
        try {
            const user = await User.findByPk(id);
            if(!user) {
                const error = new Error("Not Found");
                error.status = 404;
                throw error;
            }
            Object.assign(response, {
                status: 200,
                message: "Success",
                data: user,
            });
        } catch(e) {
            if(e.status !== 404) {
                e.status = 500;
                e.message = "Server Error";
            }
            Object.assign(response, {
                status: e.status,
                message: e.message,
            });
        }
        return res.status(response.status).json(response);
    },

    update: async(req, res) => {
        const { id } = req.params;
        const method = req.method;
        const response = {};
        const rules = {};
        if(req.body.name) {
            rules.name = string().min(4, "Tên phải từ 4 ký tự");
        }

        if (req.body.email) {
            rules.email = string().email("Email đúng định dạng");
        }

        if (req.body.password) {
            rules.password = string().min(6, "Password phải từ 6 kí tự");
        }
        //Validate
        const schema = object(rules);

        // const body = req.body;
        try {
            const body = await schema.validate(req.body, {
                abortEarly: false,
            });
            if(body.password) {
                body.password = bcrypt.hashSync(body.password, 10);
            }

            if(method === "PUT") {
                body = Object.assign({
                    name: null,
                    email: null,
                    status: null,
                    password: null,
                },
                body,
                )
            }
    
    
            await User.update(body, {
              where: { id },
            });
          
            const user = await User.findByPk(id, {
                attributes: {
                    exclude: "password",
                }
            });
            Object.assign(response, {
                status: 200,
                message: "Success",
                data: user,
            });
        // delete user.dataValues.password;
        } catch (e) {
            const errors = Object.fromEntries(
                e.inner.map((item) => [item.path, item.message])
            );
            Object.assign(response, {
              status: 400,
              message: "Bad Request",
              errors,
            });
        }
        return res.status(response.status).json(response);
    },

    delete: async(req, res) => {
        const { id } = req.params;
        const response = {};
        try {
            const user = User.findByPk(id);
            if(!user) {
                const error = new Error("Not Found");
                error.status = 404;
                throw error;
            }
            await User.destroy({
                where: { 
                    id,
                }
            });
            Object.assign(response, {
                status: 200,
                message: "Success",
                data: user,
            });
        } catch(e) {
            if(e.status !== 404) {
                e.status = 505;
                e.message = "Server Error";
            }
            Object.assign(response, {
              status: e.status,
              message: e.message,
            });
        }
    }
}