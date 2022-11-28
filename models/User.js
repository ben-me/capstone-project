import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import next from 'next';

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

userSchema.pre('save', async function () {
  await bcrypt.genSalt(10, function (error, salt) {
    if (error) {
      console.log(error);
    } else {
      bcrypt.hash(this.password, salt, function (err, hash) {
        if (err) {
          console.log(err);
        }
        saveUser(hash);
      });
    }
  });
});
