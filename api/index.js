import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const port = 3000;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(port, () => {
  console.log(`Server live on port ${port}...`);
});
