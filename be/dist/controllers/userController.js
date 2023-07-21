"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.updateUser = exports.deleteUser = exports.getUserById = exports.getUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const createUser = async (req, res) => {
    const data = req.body;
    // console.log(data);
    if (data) {
        const oldUser = await user_model_1.default.findOne({
            email: data.email,
        });
        if (oldUser) {
            return res.status(400).json({
                success: false,
                message: "Хэрэглэгч бүртгэлтэй байна",
            });
        }
        let hashedPasswords = await bcrypt_1.default.hash(data.password, 10);
        data.password = hashedPasswords;
        try {
            const newUser = await user_model_1.default.create(data);
            res.status(201).json({
                success: true,
                message: "Хэрэглэгч амжилттай үүслээ",
                data: newUser,
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
exports.createUser = createUser;
const getUser = async (req, res) => {
    try {
        const user = await user_model_1.default.find({});
        res.status(201).json(user);
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.getUser = getUser;
const getUserById = async (req, res) => {
    try {
        const user = await user_model_1.default.findOne({ _id: req.params.id });
        if (user) {
            res.status(200).json({ success: true, data: user });
        }
    }
    catch (error) {
        res.status(404).json({ success: false });
    }
};
exports.getUserById = getUserById;
const deleteUser = async (req, res) => {
    const id = req.body.id;
    // console.log("Deleting User");
    // console.log(id);
    try {
        await user_model_1.default.deleteOne({ _id: id });
        const users = await user_model_1.default.find();
        res.status(201).json({
            success: true,
            message: "Successfully Deleted",
            data: users,
        });
    }
    catch (error) {
        res.status(404).json(error);
    }
};
exports.deleteUser = deleteUser;
// Update user
const updateUser = async (req, res) => {
    const { id } = req.params; // Get the user ID from request parameters
    // console.log(id);
    let { first_name, last_name, email, phone_number, user_role_id, status, address, profile_img, } = req.body; // Get updated data from request body
    const existingUser = await user_model_1.default.findOne({ email: email.toLowerCase() });
    if (existingUser && existingUser.id !== id) {
        // console.log("Имэйл хаяг давтагдаж байна");
        return res.status(400).json({
            success: false,
            message: "Энэ имэйл хаяг бүртгэгдсэн байна.",
        });
    }
    const existingUser2 = await user_model_1.default.findOne({ phone_number: phone_number });
    if (existingUser2 && existingUser2.id !== id) {
        // console.log("Утасны дугаар давтагдаж байна");
        return res.status(400).json({
            success: false,
            message: "Энэ утасны дугаар бүртгэгдсэн байна.",
        });
    }
    try {
        // Find the user by ID and update its name and status
        email = email.toLowerCase();
        const updatedUser = await user_model_1.default.findByIdAndUpdate(id, {
            first_name,
            last_name,
            email,
            phone_number,
            user_role_id,
            status,
            address,
            profile_img,
        }, { new: true });
        if (!updatedUser) {
            // If user not found, return an error response
            return res.status(404).json({ message: "User not found" });
        }
        // If user found and updated successfully, return a success response
        return res.status(200).json({ data: updatedUser });
    }
    catch (error) {
        // If an error occurs, return an error response
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updateUser = updateUser;
// ! Login
const login = async (req, res) => {
    try {
        const { email, password, remember_me } = req.body;
        if (!(email && password)) {
            return res.status(400).json({ message: "Утгуудыг бүрэн оруулна уу" });
        }
        const user = await user_model_1.default.findOne({ email: email.toLowerCase() });
        // console.log(user);
        let isMatch = null;
        if (user && user.password && password !== undefined) {
            isMatch = await bcrypt_1.default.compare(password, user.password);
        }
        if (user && isMatch) {
            const jwtBody = {
                user_id: user._id,
                email: email,
                remember_me: remember_me,
            };
            const token = jsonwebtoken_1.default.sign(jwtBody, "Token send back", { expiresIn: "24h" });
            res.status(200).json({
                success: true,
                email: user.email,
                id: user._id,
                sessionToken: token,
                name: user.last_name,
            });
            return;
        }
        else {
            // console.log("Нууц үг нэр таарахгүй байна");
            return res.status(400).json({
                success: false,
                message: "Нууц үг емайл таарахгүй байна",
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error,
        });
    }
};
exports.login = login;
