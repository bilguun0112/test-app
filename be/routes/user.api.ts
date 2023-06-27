import { Request, Response, Router } from "express";
import {
  createOrUpdate,
  deleteUserById,
  getUserById,
  readAllUsers,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/list", async (req: Request, res: Response) => {
  const { success, data } = await readAllUsers();

  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, messsage: "Error" });
});

userRouter.post("/add", async (req, res) => {
  const { success, data } = await createOrUpdate(req.body);

  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
});

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { success } = await deleteUserById(id);
  if (success) {
    return res.json({ success });
  }
  return res.status(500).json({ success: false, message: "Error" });
});

userRouter.get("/byId/:id", async (req, res) => {
  const { id } = req.params;
  const { success, data } = await getUserById(id);
  if (success) {
    return res.json({ success, data });
  }

  return res.status(500).json({ success: false, message: "Error" });
});

userRouter.put("/update/:id", async (req, res) => {
  const user = req.body;
  const { id } = req.params;
  console.log("id", id);
  user.id = id;

  const { success, data } = await createOrUpdate(user);

  if (success) {
    return res.json({ success, data });
  }
  return res.status(500).json({ success: false, message: "Error" });
});
// userRouter.post("/login", login);
export default userRouter;
