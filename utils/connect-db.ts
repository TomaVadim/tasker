import mongoose, { ConnectOptions } from "mongoose";

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
    await mongoose.connect(process.env.MONGODB_URI as string, connectOptions);

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
