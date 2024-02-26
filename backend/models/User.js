import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactInfo: {
    phone: String,
    address: String,
  },
  profilePicture: { type: String },
  gender: { type: String, required: true },
  role: { type: String, enum: ["buyer", "seller", "admin"], default: "buyer" },
  favoriteProperties: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  ],
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Property" }],
  transactios: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
});

const User = mongoose.model("User", userSchema);

export default User;
