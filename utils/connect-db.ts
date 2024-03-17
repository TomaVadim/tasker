import mongoose, { ConnectOptions } from "mongoose";
import { ENV_VARIABLES } from "@/types/env-variables";

let isConnected = false;

const connectOptions: ConnectOptions = {
  dbName: "tasker",
};

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(ENV_VARIABLES.MONGODB_URI, connectOptions);

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
