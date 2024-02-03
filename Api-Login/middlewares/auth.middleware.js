module.exports = (req, res, next) => {
    const pathName = req.baseUrl + req.path;
    // console.log(pathName);
    if(req.user || 
        pathName === "/auth/google"|| 
        pathName === "/auth/github" || 
        pathName === "/profile" ||
        pathName.includes("users")) {
        return next();
    }

    return res.redirect("/auth/login");
}