"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/list", async (req, res) => {
    const { success, data } = await (0, userController_1.readAllUsers)();
    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, messsage: "Error" });
});
userRouter.post("/add", async (req, res) => {
    const { success, data } = await (0, userController_1.createOrUpdate)(req.body);
    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, message: "Error" });
});
userRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    const { success } = await (0, userController_1.deleteUserById)(id);
    if (success) {
        return res.json({ success });
    }
    return res.status(500).json({ success: false, message: "Error" });
});
userRouter.get("/byId/:id", async (req, res) => {
    const { id } = req.params;
    const { success, data } = await (0, userController_1.getUserById)(id);
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
    const { success, data } = await (0, userController_1.createOrUpdate)(user);
    if (success) {
        return res.json({ success, data });
    }
    return res.status(500).json({ success: false, message: "Error" });
});
// userRouter.post("/login", login);
exports.default = userRouter;
