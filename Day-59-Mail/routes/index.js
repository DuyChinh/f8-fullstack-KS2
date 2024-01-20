var express = require('express');
var router = express.Router();
var sendMailController = require("../controlllers/sendMail.controller");
const model = require("../models/index");
const Post = model.Post;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', sendMailController.index);

router.get("/send", sendMailController.send);
router.post("/send", sendMailController.handleSend);

router.post("/content-detail/:id", sendMailController.showContent);

router.get("/open-mail", async(req, res) => {
  // Lấy thông tin từ query parameter (ví dụ: `id`)
  const { id } = req.query;

 await Post.update({ status: true }, {
  where: {
    id: id,
  }
 });

  res.sendFile(path.join(__dirname, "../public", "img.png"));
});

// app.listen(3000, () => {
//   console.log("Máy chủ đang lắng nghe tại cổng 3000");
// });

module.exports = router;
