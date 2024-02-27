import Transaction from "../models/Transaction.js";
import Property from "../models/Property.js";
export const transact = async (req, res) => {
  try {
    const { buyerId, sellerId, propertyId, transactionAmount } = req.body;
    const property = await Property.findById(propertyId);
    const available = property.status == "available";
    if (
      available &&
      buyerId != sellerId &&
      transactionAmount >= property.price
    ) {
      const newTransaction = new Transaction({
        buyer: buyerId,
        seller: sellerId,
        property: propertyId,
        transactionAmount: transactionAmount,
        status: "completed",
      });
      await newTransaction.save();
      res.status(200).json(newTransaction);
    } else {
      res.status(404).json({
        error:
          "Peoperty is not availabe or transaction is still underprocess or some error occured",
      });
    }
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};

export const getAllTheTrasaction = async (req, res) => {
  try {
    const transactions = await Transaction.find({});
    res.status(200).json(transactions);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};

export const getSpecific = async (req, res) => {
  try {
    const userId = req.params.userId;
    const getSpecific = await Transaction.find({
      $or: [{ buyer: { $eq: userId } }, { seller: { $eq: userId } }],
    });
    res.status(200).json(getSpecific);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(404).json({ error: error });
  }
};
