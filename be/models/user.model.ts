import mongoose, { Schema } from "mongoose";
interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  registration_date: string;
  imgURL: string;
}

const UserSchema: Schema = new Schema({
  first_name: {
    type: String,
    required: [true, "Enter the First Name"],
  },
  last_name: {
    type: String,
    required: [false, "Enter the Last Name"],
  },
  email: {
    type: String,
    required: [true, "Enter the Email Address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "New Please provide an Password!"],
    unique: false,
  },
  registration_date: {
    type: String,
    unique: false,
  },
  imgURL: String,
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
