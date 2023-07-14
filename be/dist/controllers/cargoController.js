"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCargo = exports.deleteCargo = exports.getCargoById = exports.getCargo = exports.createCargo = void 0;
const cargo_model_1 = __importDefault(require("../models/cargo.model"));
const createCargo = async (req, res) => {
    const data = req.body;
    console.log(data);
    if (data) {
        const oldcargo = await cargo_model_1.default.findOne({
            order_number: data.order_number,
        });
        if (oldcargo) {
            return res.status(400).json({
                success: false,
                message: "Ачаа бүртгэлтэй байна",
            });
        }
        try {
            const newcargo = await cargo_model_1.default.create(data);
            res.status(201).json({
                success: true,
                message: "Ачаа амжилттай бүртгэгдлээ",
                data: newcargo,
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error,
            });
        }
    }
    else {
        return res.send(400).json({
            status: false,
            message: "Хэрэглэгч үүсгэхэд алдаа гарлаа",
        });
    }
};
exports.createCargo = createCargo;
const getCargo = async (req, res) => {
    try {
        const cargo = await cargo_model_1.default.find({});
        if (cargo) {
            res.status(201).json({ success: true, data: cargo });
        }
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.getCargo = getCargo;
const getCargoById = async (req, res) => {
    try {
        const cargo = await cargo_model_1.default.findOne({ _id: req.params.id });
        res.status(200).json(cargo);
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.getCargoById = getCargoById;
const deleteCargo = async (req, res) => {
    const id = req.body.id;
    console.log("Deleting Cargos");
    console.log(id);
    try {
        await cargo_model_1.default.deleteOne({ _id: id });
        const cargos = await cargo_model_1.default.find();
        res.status(201).json({
            success: true,
            message: "Successfully Deleted",
            data: cargos,
        });
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.deleteCargo = deleteCargo;
// Update cargo
const updateCargo = async (req, res) => {
    const { id } = req.params; // Get the cargo ID from request parameters
    console.log(id);
    let { order_number, sender, sender_number, receiver, receiver_number, cargo_note, cargo_count, cargo_weight, first_payment, last_payment, sending_city, } = req.body; // Get updated data from request body
    console.log(req.body);
    try {
        // Find the cargo by ID and update its name and status
        order_number = order_number.toLowerCase();
        const updatedcargo = await cargo_model_1.default.findByIdAndUpdate(id, {
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
        }, { new: true });
        if (!updatedcargo) {
            // If cargo not found, return an error response
            return res.status(404).json({ message: "cargo not found" });
        }
        // If cargo found and updated successfully, return a success response
        return res.status(200).json({ data: updatedcargo });
    }
    catch (error) {
        // If an error occurs, return an error response
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updateCargo = updateCargo;