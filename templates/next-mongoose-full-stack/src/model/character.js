import mongoose from 'mongoose'

const characterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add Name'],
      unique: true,
      maxlength: [20, 'Name can not be more than 20 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add Description'],
      maxlength: [100, 'Description can not be more than 100 characters'],
    },
    image: {
      type: String,
      required: [true, 'Please add Image'],
      maxlength: [200, 'Image can not be more than 200 characters'],
    },
    school: {
      type: String,
      required: [true, 'Please add School'],
      maxlength: [200, 'School can not be more than 200 characters'],
    },
    anime: {
      type: Boolean,
      required: [true, 'Please add Anime'],
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models.Character || mongoose.model('Character', characterSchema)