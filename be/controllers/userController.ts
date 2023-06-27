import {
  DynamoDBClient,
  PutItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
// import { fromIni } from "@aws-sdk/credential-provider-ini";
import {
  DeleteCommand,
  DynamoDBDocumentClient,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({
  region: process.env.AWS_DEFAULT_REGION || "ap-southeast-1",
  // credentials: fromIni({
  //   aws_access_key_id = process.env.AWS_ACCESS_KEY_ID
  //   aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY
  // }),
});

const documentClient = DynamoDBDocumentClient.from(client);
const TableName = "Cargo_app";

// Create or Update users
const createOrUpdate = async (data = {}) => {
  const marshalledData = marshall(data);

  const params = {
    TableName,
    Item: marshalledData,
  };

  try {
    await documentClient.send(new PutItemCommand(params));
    return { success: true, data };
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return { success: false };
  }
};

// Read all users
const readAllUsers = async () => {
  const params = {
    TableName,
  };

  try {
    const { Items = [] } = await documentClient.send(new ScanCommand(params));
    const unmarshalledItems = Items.map((item: any) => unmarshall(item));
    return { success: true, data: unmarshalledItems };
  } catch (error) {
    console.error("Error reading all users:", error);
    return { success: false, data: null };
  }
};

// Read Users by ID
const getUserById = async (id: string) => {
  const params = {
    TableName,
    Key: {
      id: String(id),
    },
  };

  try {
    const { Item } = await documentClient.send(new GetCommand(params));
    console.log("Retrieved Item:", Item);

    if (Item) {
      return { success: true, data: Item };
    } else {
      return { success: false, data: null };
    }
  } catch (error) {
    console.error("Error getting user by ID:", error);
    return { success: false, data: null };
  }
};

// Delete User by ID
const deleteUserById = async (id: any) => {
  const params = {
    TableName,
    Key: {
      id: id,
    },
  };

  try {
    await documentClient.send(new DeleteCommand(params));
    return { success: true };
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    return { success: false };
  }
};

export { createOrUpdate, readAllUsers, getUserById, deleteUserById };
