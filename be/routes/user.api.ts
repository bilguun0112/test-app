import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  login,
  updateUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/list", getUser);
userRouter.post("/add", createUser);
userRouter.delete("/delete/:id", deleteUser);
userRouter.get("/byId/:id", getUserById);
userRouter.put("/update/:id", updateUser);
userRouter.post("/login", login);
export default userRouter;
