import Property from "../models/Property.js";

export const addListings = async (req, res) => {
  try {
    const { propertyType, location, price, bedrooms, bathrooms } = req.body;
    const property = new Property({
      propertyType: propertyType,
      location: location,
      price,
      bedrooms,
      bathrooms,
    });

    if (property) {
      await property.save();
      res.status(200).json({
        _id: property._id,
      });
    } else res.status(404).json({ error: "Invalid User data" });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};

export const allListings = async (req, res) => {
  try {
    const all = await Property.find({}).select(
      "propertyType location price status dateListed"
    );
    res.status(200).json(all);
  } catch (error) {}
  console.log("Error in login controller", error.message);
  res.status(404).json({ error: error });
};

export const specificListing = async (req, res) => {
  const propertyId = req.params.propertyId;
  console.log(propertyId);
  try {
    const propertyInfo = await Property.findById(propertyId);
    res.status(200).json(propertyInfo);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};

export const editListing = async (req, res) => {
  const {
    propertyType,
    location,
    price,
    bedrooms,
    bathrooms,
    amenities,
    dateListed,
    status,
  } = req.body;
  const updateInfo = {
    propertyType: propertyType,
    location: location,
    price: price,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    amenities: amenities,
    status: status,
    dateListed: dateListed,
  };

  try {
    const propertyId = req.params.propertyId;
    await Property.findByIdAndUpdate(propertyId, updateInfo);
    res.status(200).json({ _id: propertyId });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};
