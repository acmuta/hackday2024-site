import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
// put attributes here
});

const User = models.User|| model("User", UserSchema);

export default User;