import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    image: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    provider: {
      type: String,
      default: 'email',
    },
  },
  { timestamps: true }
)

const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)

export default Profile