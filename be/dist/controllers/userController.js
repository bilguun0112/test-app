"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.getUserById = exports.readAllUsers = exports.createOrUpdate = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const util_dynamodb_1 = require("@aws-sdk/util-dynamodb");
// import { fromIni } from "@aws-sdk/credential-provider-ini";
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({
    region: process.env.AWS_DEFAULT_REGION || "ap-southeast-1",
    // credentials: fromIni({
    //   aws_access_key_id = process.env.AWS_ACCESS_KEY_ID
    //   aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY
    // }),
});
const documentClient = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const TableName = "Cargo_app";
// Create or Update users
const createOrUpdate = async (data = {}) => {
    const marshalledData = (0, util_dynamodb_1.marshall)(data);
    const params = {
        TableName,
        Item: marshalledData,
    };
    try {
        await documentClient.send(new client_dynamodb_1.PutItemCommand(params));
        return { success: true, data };
    }
    catch (error) {
        console.error("Error creating or updating user:", error);
        return { success: false };
    }
};
exports.createOrUpdate = createOrUpdate;
// Read all users
const readAllUsers = async () => {
    const params = {
        TableName,
    };
    try {
        const { Items = [] } = await documentClient.send(new client_dynamodb_1.ScanCommand(params));
        const unmarshalledItems = Items.map((item) => (0, util_dynamodb_1.unmarshall)(item));
        return { success: true, data: unmarshalledItems };
    }
    catch (error) {
        console.error("Error reading all users:", error);
        return { success: false, data: null };
    }
};
exports.readAllUsers = readAllUsers;
// Read Users by ID
const getUserById = async (id) => {
    const params = {
        TableName,
        Key: {
            id: String(id),
        },
    };
    try {
        const { Item } = await documentClient.send(new lib_dynamodb_1.GetCommand(params));
        console.log("Retrieved Item:", Item);
        if (Item) {
            return { success: true, data: Item };
        }
        else {
            return { success: false, data: null };
        }
    }
    catch (error) {
        console.error("Error getting user by ID:", error);
        return { success: false, data: null };
    }
};
exports.getUserById = getUserById;
// Delete User by ID
const deleteUserById = async (id) => {
    const params = {
        TableName,
        Key: {
            id: id,
        },
    };
    try {
        await documentClient.send(new lib_dynamodb_1.DeleteCommand(params));
        return { success: true };
    }
    catch (error) {
        console.error("Error deleting user by ID:", error);
        return { success: false };
    }
};
exports.deleteUserById = deleteUserById;
