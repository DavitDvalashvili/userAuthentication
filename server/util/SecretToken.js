import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// config dotenv
dotenv.config();

const Token_Key = process.env.TOKEN_KEY;

export const createSecretToken = (id) => {
  return jwt.sign({ id }, Token_Key, {
    expiresIn: "120m",
  });
};
