import { Router } from "express";

import {
  createCargo,
  deleteCargo,
  getCargo,
  getCargoById,
  getCargoByOrderNum,
  updateCargo,
} from "../controllers/cargoController";

const cargoRouter = Router();

cargoRouter.get("/list", getCargo);
cargoRouter.post("/add", createCargo);
cargoRouter.delete("/delete/:id", deleteCargo);
cargoRouter.get("/byId/:id", getCargoById);
cargoRouter.put("/update/:id", updateCargo);
cargoRouter.get("/search", getCargoByOrderNum);
export default cargoRouter;
