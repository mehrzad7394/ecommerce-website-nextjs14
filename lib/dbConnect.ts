import mongoose from "mongoose";

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGO!);
    console.log("connected");
  } catch (error) {
    throw new Error("connection failed");
  }
}

export default dbConnect;
