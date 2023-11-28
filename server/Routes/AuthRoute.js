import express from "express";
import signUp from "../Controllers/AuthController.js";
import { login } from "../Controllers/AuthController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/", userVerification);

export default router;
