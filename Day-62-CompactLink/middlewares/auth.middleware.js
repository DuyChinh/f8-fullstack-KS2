const { Link } = require("../models/index");
module.exports = async(req, res, next) => {
    const pathName = req.baseUrl + req.path;
    const src = req.headers.host + pathName;
    const link = await Link.findOne({
        where: {
            compact_link: src,
        }
    });
   
    if(link && !link.secure) {
        return res.redirect(`${link.root_link}`);
    }

    if (
      req.user ||
      pathName === "/auth/login/google" ||
      pathName === `/${link?.code}/qrcode`||
      pathName === `/${link?.code}`
    ) {
      return next();
    }

    return res.redirect("/auth/login");
}