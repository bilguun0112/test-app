import { Router } from "express";

import {
  createCargo,
  deleteCargo,
  getCargo,
  getCargoById,
  updateCargo,
} from "../controllers/cargoController";

const cargoRouter = Router();

cargoRouter.get("/list", getCargo);
cargoRouter.post("/add", createCargo);
cargoRouter.delete("/delete/:id", deleteCargo);
cargoRouter.get("/byId/:id", getCargoById);
cargoRouter.put("/update/:id", updateCargo);
export default cargoRouter;
