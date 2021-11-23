import express from "express";
import {
  loginUser,
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  userLogout,
} from "../controllers/user.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/user", verifyToken, getAllUsers);
router.post("/user", createUser);
router.post("/login", loginUser);
router.get("/token", refreshToken);
router.delete("/logout", userLogout);
router.get("/user/:id", getUserById);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
