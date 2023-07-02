import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cors from "cors";
import userRouter from "./routes/user.api";
import cargoRouter from "./routes/cargo.api";
const app = express();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING: any = process.env.MONGO_CONNECTION_STRING;

let name: string = "<h1>Ecommerce backend</h1>";

app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/cargos", cargoRouter);
app.get("/", (req: Request, res: Response) => {
  res.send(name);
});
app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error(error));
  console.log(`Service is running on http://localhost:${PORT}`);
});
