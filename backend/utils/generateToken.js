import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.JWT_SECRET;
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, SECRET, { expiresIn: "1h" });
  res.cookie("jwt", token, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite: "strict", //CSRF attacks cross-site request forgery attacks
    secure: false,
  });
};

export default generateTokenAndSetCookie;
