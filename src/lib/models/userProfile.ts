import mongoose from 'mongoose'

const userProfileSchema = new mongoose.Schema(
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

const UserProfile = mongoose.models.UserProfile || mongoose.model('UserProfile', userProfileSchema)

export default UserProfile