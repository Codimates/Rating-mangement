import RatingSchema from "../Models/Ratingsmodel.js";

const RatingAdd = async (req, res) => {
  const { email, rating, review, userid, productId } = req.body;

  try {
    if (!email || !rating || !review) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newRating = new RatingSchema({
      email,
      rating,
      review,
      userid,
      productId,
    });
    await newRating.save();
    res.status(200).json({ message: "Rating added successfully" });
  } catch (error) {
    console.log(error);
  }
};

const RatingGet = async (req, res) => {
  const { productId, email, userid } = req.body;

  try {
    if (!productId || !email || !userid) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const ratings = await RatingSchema.find({ productId, email, userid });
    res.status(200).json({ ratings });
  } catch (error) {
    console.log(error);
  }
};

const deleteRating = async (req, res) => {
  const { id } = req.body;
  try {
    if (!id) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    await RatingSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "Rating deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

const calculatetotalrating = async (req, res) => {
  const { productId } = req.body;

  try {
    if (!productId) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const ratings = await RatingSchema.find({ productId });
    let totalrating = 0;
    ratings.map((rating) => {
      totalrating += rating.rating;
    });
    const totalratings = ratings.length;
    const total = totalrating / totalratings;
    res.status(200).json({ total });
  } catch (error) {
    console.log(error);
  }
};

export { RatingAdd, RatingGet, deleteRating ,calculatetotalrating};
