const express = require("express");
const router = express.Router();
const controller = require("../controllers/product");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

router.post("/", [verifyAccessToken, isAdmin], controller.createProduct);
router.get("/", controller.getProducts);
router.put("/:pid", [verifyAccessToken, isAdmin], controller.updateProduct);
router.delete("/:pid", [verifyAccessToken, isAdmin], controller.deleteProduct);
router.get("/:pid", controller.getProduct);
router.put("/ratings", verifyAccessToken, controller.ratings);

module.exports = router;
