import { Request, Response } from "express";
import CargoModel from "../models/cargo.model";

export const createCargo = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  if (data) {
    const oldcargo = await CargoModel.findOne({
      order_number: data.order_number,
    });
    if (oldcargo) {
      return res.status(400).json({
        success: false,
        message: "Ачаа бүртгэлтэй байна",
      });
    }

    try {
      const newcargo = await CargoModel.create(data);
      res.status(201).json({
        success: true,
        message: "Ачаа амжилттай бүртгэгдлээ",
        data: newcargo,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  } else {
    return res.send(400).json({
      status: false,
      message: "Хэрэглэгч үүсгэхэд алдаа гарлаа",
    });
  }
};

export const getCargo = async (req: Request, res: Response) => {
  try {
    const cargo = await CargoModel.find({});
    if (cargo) {
      res.status(201).json({ success: true, data: cargo });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getCargoById = async (req: Request, res: Response) => {
  try {
    const cargo = await CargoModel.findOne({ _id: req.params.id });
    if (cargo) {
      res.status(200).json({ success: true, data: cargo });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteCargo = async (req: Request, res: Response) => {
  const id = req.body.id;
  console.log("Deleting Cargos");
  console.log(id);
  try {
    await CargoModel.deleteOne({ _id: id });
    const cargos = await CargoModel.find();
    res.status(201).json({
      success: true,
      message: "Successfully Deleted",
      data: cargos,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

// Update cargo
export const updateCargo = async (req: Request, res: Response) => {
  const { id } = req.params; // Get the cargo ID from request parameters
  console.log(id);
  let {
    order_number,
    sender,
    sender_number,
    receiver,
    receiver_number,
    cargo_note,
    cargo_count,
    cargo_weight,
    first_payment,
    last_payment,
    sending_city,
  } = req.body; // Get updated data from request body
  console.log(req.body);

  try {
    // Find the cargo by ID and update its name and status
    order_number = order_number.toLowerCase();
    const updatedcargo = await CargoModel.findByIdAndUpdate(
      id,
      {
        sender,
        sender_number,
        receiver,
        receiver_number,
        cargo_note,
        cargo_count,
        cargo_weight,
        first_payment,
        last_payment,
        sending_city,
      },
      { new: true }
    );

    if (!updatedcargo) {
      // If cargo not found, return an error response
      return res.status(404).json({ message: "cargo not found" });
    }

    // If cargo found and updated successfully, return a success response
    return res.status(200).json({ data: updatedcargo });
  } catch (error) {
    // If an error occurs, return an error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCargoByOrderNum = async (req: Request, res: Response) => {
  const { term } = req.query;
  try {
    const cargo = await CargoModel.find({
      order_number: { $regex: new RegExp(String(term), "i") },
    });
    console.log(cargo);
    if (cargo.length === 0) {
      res.status(400).json({
        success: false,
        message: "Таны оруулсан ачааны код буруу эсвэл бүртгэлгүй байна",
      });
    } else {
      res.status(200).json({
        success: true,
        data: cargo[0],
      });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};
