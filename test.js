import "dotenv/config";
import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);

try {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("✅ Connected successfully!");

  await mongoose.disconnect();
} catch (error) {
  console.error("❌ Connection failed:");
  console.error(error);
}
