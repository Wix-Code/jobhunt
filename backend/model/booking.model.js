import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  rooms: { type: Number, default: 1 },
  adults: { type: Number, default: 1 },
  children: { type: Number, default: 0 },
  breakfast: { type: Boolean, default: false },
  totalPrice: { type: Number, required: true }
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;