import mongoose, {Document, model, Schema, Types} from "mongoose";
interface UserInterface {
  name?: string;
  email: string;
  image?: string;
  role: string;
  provider: string;
  team: string;
}
interface Challenge{
  url: string;
  score: number;
}
type User = UserInterface;
interface ITeam extends Document {
  name: string;
  members: Array<User>;
  cyberScore: Challenge;
  estateScore: Challenge;
  educationScore: Challenge;
  aiScore: Challenge;


}

const teamSchema = new Schema<ITeam>({
  name:{
    type: String,
    required: true,
    unique: true,
  },
  cyberScore: {
    url: {
      type:String,
      default:"None"},
    score: {
      type: Number,
      default: 0
  },
},
  estateScore: {
    url: {
      type:String,
      default:"None"},
    score: {
      type: Number,
      default: 0
  },
},
  educationScore: {
    url: {
      type:String,
      default:"None"},
    score: {
      type: Number,
      default: 0
  },
},
  aiScore: {
    url: {
      type:String,
      default:"None"},
    score: {
      type: Number,
      default: 0
  },
  },
  
  members: [{
      name: String,
      email: { type: String, required: true },
      image: String,
      role: { type: String, default: 'user'},
      provider: { type: String, default: 'None'},
      team: { type: String, default: 'None'},
  }]
})
const Team = mongoose.models.Team || model<ITeam>('Team', teamSchema);
export default Team;