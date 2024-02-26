import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  propertyType: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, requried: true },
  bathrooms: { type: Number, requried: true },
  squareFootage: Number,
  description: String,
  amenities: [String],
  status: {
    type: String,
    enum: ["available", "sold", "pending"],
    default: "available",
  },
  dateListed: { type: Date, default: Date.now },
});

const Property = mongoose.model("Property", propertySchema);

export default Property;
