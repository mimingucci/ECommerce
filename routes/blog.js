const express = require("express");
const router = express.Router();
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
const controller = require("../controllers/blog");
const uploader = require("../config/cloudinary.config");

router.post("/", [verifyAccessToken, isAdmin], controller.createBlog);
router.get("/all", controller.getBlogs);
router.get("/one/:bid", controller.getBlog);
router.put("/like/:bid", [verifyAccessToken], controller.likeBlog);
router.put("/dislike/:bid", [verifyAccessToken], controller.likeBlog);
router.put(
  "/image/:bid",
  [verifyAccessToken, isAdmin],
  uploader.single("image"),
  controller.uploadImages
);
router.put("/:bid", [verifyAccessToken, isAdmin], controller.updateBlog);
router.delete("/:bid", [verifyAccessToken, isAdmin], controller.deleteBlog);
module.exports = router;
