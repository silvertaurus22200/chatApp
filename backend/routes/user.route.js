import express from "express"
import UserController from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

export default router;