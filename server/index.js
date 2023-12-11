//imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./Routes/AuthRoute.js";

// config dotenv
dotenv.config();

//constants
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

//middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://user-authentication-client.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

// Handle preflight requests
app.options("*", cors());

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
