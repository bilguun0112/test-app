import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  if (data) {
    const oldUser = await UserModel.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: "Хэрэглэгч бүртгэлтэй байна",
      });
    }
    let hashedPasswords = await bcrypt.hash(data.password, 10);
    data.password = hashedPasswords;
    try {
      const newUser = await UserModel.create(data);
      res.status(201).json({
        success: true,
        message: "Хэрэглэгч амжилттай үүслээ",
        data: newUser,
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

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find({});
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.body.id;
  console.log("Deleting User");
  console.log(id);
  try {
    await UserModel.deleteOne({ _id: id });
    const users = await UserModel.find();
    res.status(201).json({
      success: true,
      message: "Successfully Deleted",
      data: users,
    });
  } catch (error) {
    res.status(404).json(error);
  }
};

// Update user
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params; // Get the user ID from request parameters
  console.log(id);
  let {
    first_name,
    last_name,
    email,
    phone_number,
    user_role_id,
    status,
    address,
    profile_img,
  } = req.body; // Get updated data from request body
  console.log(req.body);

  console.log(req.body);

  const existingUser = await UserModel.findOne({ email: email.toLowerCase() });

  if (existingUser && existingUser.id !== id) {
    console.log("Имэйл хаяг давтагдаж байна");
    return res.status(400).json({
      success: false,
      message: "Энэ имэйл хаяг бүртгэгдсэн байна.",
    });
  }

  const existingUser2 = await UserModel.findOne({ phone_number: phone_number });

  if (existingUser2 && existingUser2.id !== id) {
    console.log("Утасны дугаар давтагдаж байна");
    return res.status(400).json({
      success: false,
      message: "Энэ утасны дугаар бүртгэгдсэн байна.",
    });
  }

  try {
    // Find the user by ID and update its name and status
    email = email.toLowerCase();
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        first_name,
        last_name,
        email,
        phone_number,
        user_role_id,
        status,
        address,
        profile_img,
      },
      { new: true }
    );

    if (!updatedUser) {
      // If user not found, return an error response
      return res.status(404).json({ message: "User not found" });
    }

    // If user found and updated successfully, return a success response
    return res.status(200).json({ data: updatedUser });
  } catch (error) {
    // If an error occurs, return an error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ! Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("email = " + email);
    console.log("password = " + password);

    if (!(email && password)) {
      return res.status(400).json({ message: "Утгуудыг бүрэн оруулна уу" });
    }

    const user = await UserModel.findOne({ email: email });
    console.log(user);

    let isMatch = null;

    if (user && user.password && password !== undefined) {
      isMatch = await bcrypt.compare(password, user.password);
    }

    if (user && isMatch) {
      const jwtBody = {
        user_id: user._id,
        email: email,
      };
      const token = jwt.sign(jwtBody, "Token send back", { expiresIn: "24h" });
      res.status(200).json({
        success: true,
        email: user.email,
        id: user._id,
        sessionToken: token,
        name: user.last_name,
      });
      return;
    } else {
      console.log("Нууц үг нэр таарахгүй байна");
      return res.status(400).json({
        success: false,
        message: "Нууц үг емайл таарахгүй байна",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
