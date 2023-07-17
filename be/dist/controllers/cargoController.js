"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCargoByOrderNum = exports.updateCargo = exports.deleteCargo = exports.getCargoById = exports.getCargo = exports.createCargo = void 0;
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
        const cargo = await cargo_model_1.default.find({}).populate("admin_id", "first_name");
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
        if (cargo) {
            res.status(200).json({ success: true, data: cargo });
        }
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.getCargoById = getCargoById;
const deleteCargo = async (req, res) => {
    const { id } = req.params;
    console.log("Deleting Cargos", id);
    try {
        await cargo_model_1.default.deleteOne({ _id: id });
        res.status(201).json({
            success: true,
            message: "Successfully Deleted",
            // data: cargos,
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
    let { order_number, sender, sender_number, receiver, receiver_number, cargo_note, cargo_count, cargo_weight, first_payment, last_payment, payment_method, } = req.body; // Get updated data from request body
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
            payment_method,
        }, { new: true });
        if (!updatedcargo) {
            // If cargo not found, return an error response
            return res
                .status(404)
                .json({ success: false, message: "Бүртгэл засахад алдаа гарлаа" });
        }
        // If cargo found and updated successfully, return a success response
        return res.status(200).json({
            success: true,
            data: updatedcargo,
            message: "Бүртгэл амжилттай шинэчлэгдлээ",
        });
    }
    catch (error) {
        // If an error occurs, return an error response
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updateCargo = updateCargo;
const getCargoByOrderNum = async (req, res) => {
    const { term } = req.query;
    try {
        const cargo = await cargo_model_1.default.find({
            order_number: { $regex: new RegExp(String(term), "i") },
        });
        console.log(cargo);
        if (cargo.length === 0) {
            res.status(400).json({
                success: false,
                message: "Таны оруулсан ачааны код буруу эсвэл бүртгэлгүй байна",
            });
        }
        else {
            res.status(200).json({
                success: true,
                data: cargo[0],
            });
        }
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.getCargoByOrderNum = getCargoByOrderNum;
