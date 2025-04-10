import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
  desc: {
    type: String, required: true
  },
  name: {
    type: String, required: true
  },
  price: {
    type: Number, required: true
  },
  img: {
    type: Array, required: true
  },
  filter: {
    type: String, required: false
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;