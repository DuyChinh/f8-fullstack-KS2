module.exports = (req, res, next) => {
    const pathName = req.baseUrl + req.path;
  if (req.user && pathName !== "/auth/logout" && pathName !== "/profile") {
    return res.redirect("/");
  }
  return next();
};
