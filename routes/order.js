const express = require("express");
const router = express.Router();
const controller = require("../controllers/order");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", verifyAccessToken, controller.createOrder);
router.put("/status/:oid", verifyAccessToken, isAdmin, controller.updateStatus);
router.get("/", verifyAccessToken, controller.getUserOrder);
router.get("/admin", verifyAccessToken, isAdmin, controller.getUserOrder);

module.exports = router;
