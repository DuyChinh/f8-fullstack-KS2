// checkTokenValidity.middleware.js
const model = require("../models/index");
const Device = model.Device; 

module.exports = (req, res, next) => {
    // const notice = req.flash("notices");
    // console.log(notice);
    req.checkToken = async(token) => {
    //   console.log(req.session.tokenUser);
    console.log(token);
      const device = await Device.findOne({
        where: {
          token: token
        },
      });
      if (device) {
        console.log(device);
        if (!device.status) {
        //   req.session.logIn = false;
        //   req.flash("notices", "Bạn đã bị đăng xuất!");
        //   return res.redirect("/signin");
            return false;
        }
        return true;
      }
      return false;
    }
}

// const checkTokenValidity = async (req, res, next) => {
//   const token = req.session.tokenUser; 
//   console.log("token", token);

//   try {
    
//     const device = await Device.findOne({ token });

//     if (device) {
//       console.log("token_db", device);
//       next();
//     } else {
//       await Device.deleteOne({ token });
//       return res
//         .status(401)
//         .json({ error: "Token không hợp lệ. Thiết bị đã đăng xuất." });
//     }
//   } catch (error) {
//     console.error("Lỗi kiểm tra tính hợp lệ của token:", error);
//     return res.status(500).json({ error: "Lỗi máy chủ nội bộ." });
//   }
// };

