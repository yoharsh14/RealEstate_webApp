import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import createConnection from "./db/connection.js";
import authRouter from "./routes/authRoute.js";
import listingRouter from "./routes/listingRoute.js";
import favoriteRouter from "./routes/FavoriteRoute.js";
import CommentRouter from "./routes/commentRoute.js";
import TrasactionRouter from "./routes/transactionRoute.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/property", listingRouter);
app.use("/favorite", favoriteRouter);
app.use("/comment", CommentRouter);
app.use("/transaction", TrasactionRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
  createConnection();
});
