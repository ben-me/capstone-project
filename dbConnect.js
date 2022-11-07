import mongoose from 'mongoose';

export default function dbConnect() {
  const { MONGODB_URL } = process.env;

  try {
    if (mongoose.connections[0].readyState) {
      console.log('Already connected');
      return;
    }
    mongoose.connect(MONGODB_URL);
    console.log('Connected!');
  } catch (error) {
    console.log('Connection failed!');
    console.error(error);
  }
}
