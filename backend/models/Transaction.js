import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  transactionDate: { type: Date, default: Date.now },
  transactionAmount: { type: Number, required: true },
  paymentMethod: String,
  status: {
    type: String,
    enum: ["completed", "pending", "cancelled"],
    default: "pending",
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
