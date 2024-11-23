import express from "express";
import {RatingAdd,RatingGet,deleteRating ,calculatetotalrating} from "../Controllers/RatingController.js";

const rourter = express.Router();

rourter.post("/addRatings",RatingAdd);
rourter.get("/getRatings",RatingGet);
rourter.delete("/deleteRatings",deleteRating);
rourter.post("/calculateTotalRating",calculatetotalrating);

export default rourter;