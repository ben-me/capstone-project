import mongoose from 'mongoose';

export default async function dbConnect() {
  const { MONGODB_URL } = process.env;

  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected!');
  } catch (error) {
    console.log('Connection failed!');
    console.error(error);
  }
}
