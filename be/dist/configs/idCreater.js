"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomId = void 0;
function generateRandomId() {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomId = "";
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters[randomIndex];
    }
    return randomId;
}
// Generate a random ID
exports.randomId = generateRandomId();
