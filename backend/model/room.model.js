import mongoose from "mongoose"

const roomSchema = new mongoose.Schema({
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
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

export default Room;