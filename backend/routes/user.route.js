import express from "express"
import UserController from "../controller/user.controller.js"
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/users", secureRoute, UserController.getAllUsers)

export default router;