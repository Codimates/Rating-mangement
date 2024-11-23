import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Restapi from "./API/RestAPI.js";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.use("/ratings/addratings", Restapi);

const Port = 4006;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
