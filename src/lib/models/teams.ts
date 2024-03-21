import mongoose, {Document, model, Schema} from "mongoose";
interface UserInterface {
  name?: string;
  email: string;
  image?: string;
  role: string;
  provider: string;
  team: string;
}
type User = UserInterface;
interface ITeam extends Document {
  name: string;
  members: Array<User>;
}
const teamSchema = new Schema<ITeam>({
  name:{
    type: String,
    required: true,
    unique: true,
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