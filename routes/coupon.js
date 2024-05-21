const express = require("express");
const router = express.Router();
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
const controller = require("../controllers/coupon");

router.post("/", [verifyAccessToken, isAdmin], controller.createCoupon);
router.get("/all", controller.getCoupons);
router.put("/:cid", [verifyAccessToken, isAdmin], controller.updateCoupon);
router.delete("/:cid", [verifyAccessToken, isAdmin], controller.deleteCoupon);
module.exports = router;
