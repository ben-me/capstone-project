import mongoose, { models } from 'mongoose';
import { Schema } from 'mongoose';

const roomSchema = new Schema({
  name: { type: String, required: true },
  desks: deskSchema,
});

const deskSchema = new Schema({
  name: { type: String, required },
  reservations: reservationSchema,
});

const reservationSchema = new Schema({
  starttime: { type: String, required },
  endtime: { type: String, required },
  date: { type: String, required },
  user: { type: String, required },
  isPrivate: { type: Boolean, required },
});

const Room = models.mongoose.Room || mongoose.model('Room', roomSchema);

export default Room;
