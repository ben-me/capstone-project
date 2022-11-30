import dbConnect from '../dbConnect';
import User from '../models/User';
import bcrypt from 'bcryptjs';

export default async function getUser(username, pw) {
  dbConnect();
  try {
    const user = await User.findOne({ name: username, password: pw });
    const { name, email, password } = user;

    return {
      name,
      email,
      password,
    };
  } catch (error) {
    console.error(error);
  }
}

export async function createUser(name, password, email) {
  dbConnect();
  try {
    const user = await User.findOne({ name, password, email });
    if (user) {
      return;
    }
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    User.create({ name, password, email });
    User.save();
  } catch (error) {
    console.log(error);
  }
}
