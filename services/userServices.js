import dbConnect from '../dbConnect';
import User from '../models/User';

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
