const asyncHandler = require("express-async-handler");
const Brand = require("../models/brand");

const createBrand = asyncHandler(async (req, res) => {
  const response = await Brand.create(req.body);
  return res.status(200).json({
    success: response ? true : false,
    createdBrand: response ? response : "Cannot create new brand",
  });
});

const getBrands = asyncHandler(async (req, res) => {
  const response = await Brand.find().select("title _id");
  return res.status(200).json({
    success: response ? true : false,
    brands: response ? response : "Cannot get all brands",
  });
});

const updateBrand = asyncHandler(async (req, res) => {
  const { brid } = req.params;
  const response = await Brand.findByIdAndUpdate(brid, req.body, {
    new: true,
  });
  return res.status(200).json({
    success: response ? true : false,
    updatedBrand: response ? response : "Cannot update brand",
  });
});

const deleteBrand = asyncHandler(async (req, res) => {
  const { brid } = req.params;
  const response = await Brand.findByIdAndDelete(brid);
  return res.status(200).json({
    success: response ? true : false,
    deletedBrand: response ? response : "Cannot delete brand",
  });
});

module.exports = {
  createBrand,
  getBrands,
  updateBrand,
  deleteBrand,
};
