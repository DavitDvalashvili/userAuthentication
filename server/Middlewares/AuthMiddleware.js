import User from "../model/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// config dotenv
dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY;

export const userVerification = (req, res) => {
  const token = req.headers.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, TOKEN_KEY, async (err, data) => {
    if (err) {
      console.log(`jwt.verify error ${err}`);
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};
