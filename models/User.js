import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.models.Login || mongoose.model('User', userSchema);

export default User;
