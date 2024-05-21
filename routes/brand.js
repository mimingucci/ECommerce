const express = require("express");
const router = express.Router();
const controller = require("../controllers/brand");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyAccessToken, isAdmin], controller.createBrand);
router.get("/", controller.getBrands);
router.put("/:brid", [verifyAccessToken, isAdmin], controller.updateBrand);
router.delete("/:brid", [verifyAccessToken, isAdmin], controller.deleteBrand);

module.exports = router;
