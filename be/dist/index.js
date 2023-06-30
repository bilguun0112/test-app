"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const user_api_1 = __importDefault(require("./routes/user.api"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
let name = "<h1>Ecommerce backend</h1>";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/users", user_api_1.default);
app.get("/", (req, res) => {
    res.send(name);
});
app.listen(PORT, () => {
    mongoose_1.default
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected successfully"))
        .catch((error) => console.error(error));
    console.log(`Service is running on http://localhost:${PORT}`);
});
