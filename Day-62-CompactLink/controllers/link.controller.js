// const BitlyClient = require("bitly").BitlyClient;
// const { customBitlinks, bitlinkId } = require("bitly");
const QRCode = require("qrcode");
const url = require("url");
const { User, Link } = require("../models/index");
const shortid = require("shortid");
const moment = require("moment");
const { where } = require("sequelize");
const Facebook = require("facebook-node-sdk");

module.exports = {
  index: async (req, res) => {
    // const links = await Link.findAll();
    const links = await Link.findAll({
      order: [["created_at", "DESC"]],
    });
    const success = req.flash("success");
    const defaultLink = req.headers.host;
    const err = req.flash("err");
    res.render("link/index", { success, links, moment, defaultLink, err });
    // res.send("vào");
  },

  handleCompact: async (req, res) => {
    const domain = req.headers.host;
    const { root_link, password, safe_navigation, new_link } = req.body;
    let shortLink = "";
    let codeRandom = "";
    const compare = domain+"/";
    if (new_link !== compare) {
      codeRandom = new_link.split("/")[1];
      const check = await Link.findOne({
        where: {
          compact_link: new_link,
        },
      });
      if (check) {
        req.flash("err", "Link tùy chỉnh đã tồn tại!Vui lòng kiểm tra lại!");
        return res.redirect(req.get("referer"));
      }
      shortLink = new_link;
    } else {
        codeRandom = shortid.generate();
        shortLink = domain + "/" + codeRandom;
    }

    let secure = false;
    if (safe_navigation) {
      secure = true;
    }

    await Link.create({
      root_link,
      compact_link: shortLink,
      password,
      secure,
      code: codeRandom,
    });
    req.flash("success", "Rút gọn link thành công!");
    return res.redirect("/link/compactLink");

    // return res.redirect("/link/secure");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Link.destroy({ where: { id } });
    req.flash("success", "Xóa thành công!");
    return res.redirect("/link/compactLink");
  },

  redirect: async(req, res) => {
    const { id } = req.params;
    // console.log(id);
    if (id !== "favicon.ico") {
      const link = await Link.findOne({ where: { code: id } });
      const view = link.view + 1;
      await Link.update(
        { view },
        {
          where: {
            code: id,
          },
        }
      );
      if(!link.password) {
        return res.render("link/action", { link });
      }
    //   console.log(link.view);
      
    }
    
    const error = req.flash("error");
    res.render("link/redirect", { error });
  },

  checkPassword: async (req, res) => {
    const { id } = req.params;
    const link = await Link.findOne({
      where: {
        code: id,
      },
    });
   
    const { password } = req.body;
    // console.log(link);
    if (link.password === password) {
      // console.log("vào");
      const rootLink = link.root_link;
      return res.render("link/action", { rootLink, link, req });
    }
    req.flash("error", "Sai mật khẩu!");
    return res.redirect(req.get("referer"));
  },

  generateQr: async(req, res) => {
    const { id } = req.params;
    const link = await Link.findOne({where: {
        code: id,
    }});
    let qr= await QRCode.toDataURL(`${link.root_link}`);
    // console.log(qr);
    // img = `<image src= " `+qr+ `" />`
    return res.render("link/qr", { qr });
  },

  // share: (req, res) => {
  //   const facebook = new Facebook({
  //     appId: "921335576185502",
  //     secret: "c488740c7fab46195fe9c30598dae9ce",
  //   });

  //   facebook.setAccessToken(
  //     "EAANF8ye8yp4BO7U7uviy656pKlTmKtT3nZB4NwXZCR3wBERVRZAapWhtbWVHWgFlp9T0auHHHq2dlkhUkFJaf5AJxHDQxDEVPbvgfYi7VkroXQpGyM5hEGXqs02nZCWRifdxTiorkkPuCxb42HU4CNSXESp9yTAZBy6KXgJGtnkmF811Uf7JPBrPA"
  //   );

  //   const body = "Nội dung bài viết của bạn";
  //   facebook.api(
  //     "/me/feed",
  //     "POST",
  //     { message: body },
  //     function (res) {
  //       if (!res || res.error) {
  //         console.log(!res ? "Lỗi xảy ra" : res.error);
  //         return;
  //       }
  //       console.log(res);
  //       console.log("ID bài viết: " + res.id);
  //     }
  //   );

  //   // facebook.api(
  //   //   `https://www.facebook.com/doanchinhit2102/feed`,
  //   //   "post",
  //   //   { message: "Hello, world!" },
  //   //   function (res) {
  //   //     if (!res || res.error) {
  //   //       console.log(!res ? "error occurred" : res.error);
  //   //       return;
  //   //     }
  //   //     console.log("Post Id: " + res.id);
  //   //   }
  //   // );
  // }

  edit: async(req, res) => {
    const { id } = req.params;
    const links = await Link.findAll({order: [["created_at", "desc"]]});
    const linkEdit = await Link.findOne({
      where: {
        code: id,
      },
    });

    const success = req.flash("success");
    const defaultLink = req.headers.host;
    const err = req.flash("err");
    res.render("link/edit", { success, links, moment, defaultLink, err, linkEdit });
  },

  handleEdit: async(req, res) => {
    const { id } = req.params;
    const { short_link, password } = req.body;
    // console.log(short_link);
    await Link.update(
      { password },
      {
        where: {
          code: id,
        },
      }
    );
    req.flash("success", "Cập nhật mật khẩu thành công!")
    return res.redirect("/link/compactLink");
  }
 
};
