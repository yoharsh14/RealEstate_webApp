import User from "../models/User.js";
import Property from "../models/Property.js";
import Favorite from "../models/Favorites.js";

export const addFavorite = async (req, res) => {
  try {
    const { userId } = req.body;
    const propertyId = req.params.propertyId;

    const user = await User.findById(userId);
    const property = await Property.findById(propertyId);

    if (user && property) {
      const favorite = new Favorite({
        user: userId,
        property: propertyId,
      });
      if (favorite) {
        await favorite.save();
        res.status(200).json({
          favoriteAdded: true,
        });
      } else
        res
          .status(500)
          .json({ error: "Internal Server Error", favoriteAdded: true });
    }
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res
      .status(500)
      .json({ error: "Internal Server Error", favoriteAdded: true });
  }
};

export const deleteFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
