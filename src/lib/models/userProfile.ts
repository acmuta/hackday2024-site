// import mongoose from 'mongoose'

// const userProfileSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//     },
//     email: {
//       type: String,
//       unique: true,
//       required: true,
//     },

//     image: {
//       type: String,
//     },
//     role: {
//       type: String,
//       default: 'user',
//     },
//     provider: {
//       type: String,
//       default: 'email',
//     },
//   },
//   // { timestamps: true }
// )

// const UserProfile = mongoose.models.UserProfile || mongoose.model('UserProfile', userProfileSchema)

// export default UserProfile
import mongoose, {Document, model, Schema} from 'mongoose'

interface IUserProfile extends Document {
  name?: string;
  email: string;
  image?: string;
  role: string;
  provider: string;
  team : string;

}

const userProfileSchema = new Schema<IUserProfile>({
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
    default: 'None',
  },
  team:{
    type: String,
    default: 'None'
  }

},
)

const UserProfile = mongoose.models.UserProfile || model<IUserProfile>('UserProfile', userProfileSchema)

export default UserProfile
