import mongoose, { Mongoose } from "mongoose"

const roomSchema = new mongoose.Schema({
  desc: {
    type: String, required: true
  },
  name: {
    type: String, required: true
  },
  price: {
    type: String, required: true
  },
  img: {
    type: Array, required: true
  },
  email: {
    type: String, required: true
  },
  password: {
    type: String, required: true
  },
  type: {
    type: String, required: true
  },
  userId: {
    type: String, required: true, ref: "User"
  }
}, { timestamps: true });

const Room = mongoose.model('Room', roomSchema);

export default Room;