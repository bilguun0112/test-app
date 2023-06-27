import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import userRouter from "./routes/user.api";
const app = express();
const PORT = process.env.PORT;

let name: string = "<h1>Ecommerce backend</h1>";

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});
app.listen(PORT, () => {
  console.log(`Service is running on http://localhost:${PORT}`);
});
