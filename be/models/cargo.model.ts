import mongoose, { Schema } from "mongoose";
interface ICargo {
  order_number: string;
  sender: string;
  sender_number: string;
  receiver: string;
  receiver_number: string;
  cargo_note: string;
  cargo_count: string;
  cargo_weight: string;
  first_payment: string;
  last_payment: string;
  registration_date: string;
  start_date: string;
  end_date: string;
  payment_method: string;
  admin_id: { type: Schema.Types.ObjectId; ref: "User" };
}

const CargoSchema: Schema = new Schema({
  order_number: String,
  sender: String,
  sender_number: String,
  receiver_number: String,
  receiver: String,
  cargo_note: String,
  cargo_count: String,
  cargo_weight: String,
  first_payment: String,
  last_payment: String,
  registration_date: String,
  payment_method: String,
  start_date: String,
  end_date: String,
  admin_id: { type: Schema.Types.ObjectId, ref: "User" },
});

const CargoModel = mongoose.model<ICargo>("Cargo", CargoSchema);

export default CargoModel;
