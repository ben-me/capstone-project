import User from '../../../models/User';
import { createUser } from '../../../services/userServices';

export default async function handler(request, response) {
  try {
    if (request.method === 'POST') {
      const { name, password, email } = await request.body;
      console.log(name, password, email);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return response.status(200).json({ message: 'Already registered' });
      }
      createUser(name, password, email);
      return response.status(200).json({ message: 'User created' });
    }
  } catch (error) {
    console.error(error);
    response.status(400).json({ message: 'Creation failed' });
  }
}
