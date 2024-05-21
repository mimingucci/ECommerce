const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      product: { type: mongoose.Types.ObjectId, ref: "Product" },
      count: Number,
      color: String,
    },
  ],
  status: {
    type: String,
    default: "Proccessing",
    enum: ["Cancelled", "Processing", "Successed"],
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  paymentIntent: {},
  orderBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Order", orderSchema);
