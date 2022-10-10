import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const reservationSchema = new Schema({
  id: { type: String },
  starttime: { type: String },
  endtime: { type: String },
  date: { type: String },
  user: { type: String },
  isPrivate: { type: Boolean },
});
const deskSchema = new Schema({
  name: { type: String, required: true },
  reservations: [reservationSchema],
});

const roomSchema = new Schema({
  name: { type: String, required: true },
  desks: [deskSchema],
});

const Room = mongoose.models.Room || mongoose.model('Room', roomSchema);

export default Room;
