const sendMail = require("../utils/mail");
const model = require("../models/index");
const moment = require("moment");
const Post = model.Post;
module.exports = {
    index: async(req, res) => {
        const result = await Post.findAll();
        const posts = result;
        res.render("index", { posts, moment });
    },

    send: async(req, res) => {
        res.render("form/index");
    },

  handleSend: async (req, res) => {
    const body = req.body;
    const post = await Post.create(body);
    const info = await sendMail(body.email, body.title, body.content, post.id);
    res.redirect("/");
  },

    showContent: async(req, res) => {
        const { id } = req.params;
        // console.log(id);
        const post = await Post.findOne({
            where: {
                id:id,
            }
        });
        // console.log(post);
        const content = post.content;
        console.log(content);
        res.render("showContent/index", {content});
    }
};
