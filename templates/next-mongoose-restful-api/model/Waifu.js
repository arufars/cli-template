import mongoose from "mongoose";

const WaifuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  image: {
    type: String,
    required: [true, "Please add an image"],
  },
  school: {
    type: String,
    required: [true, "Please add a school"],
  },
});

export default mongoose.models.Waifu || mongoose.model("Waifu", WaifuSchema);
