//imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./Routes/AuthRoute.js";

// config dotenv
dotenv.config();

//constants
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "https://user-authentication-468z.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//connect mongodb using mongoose library;
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

//add server listener
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use("/", authRoute);
