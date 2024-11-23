import mongoose from "mongoose";

const { Schema } = mongoose;

const RatingSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max:5,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date().toLocaleTimeString(),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Rating", RatingSchema);
