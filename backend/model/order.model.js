import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  address: { type: String, required: true },
  code: { type: String, required: true },
  amount: { type: Number, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

export default Order;