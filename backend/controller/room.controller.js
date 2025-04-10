import Room from "../model/room.model.js";

export const addRoom = async (req, res) => {
  const { name, desc, price, img, type, userId } = req.body;
  //const userId = req.user._id;
  try {
    const room = new Room({ name, desc, price, img, userId, type });
    await room.save();
    return res.status(201).send({ success: true, message: "Room added successfully", room });
    
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: "Failed to add room" });
  }
}

export const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({}).lean();
    return res.status(200).send({ success: true, rooms });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: "Failed to fetch rooms" });
  }
}

export const getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id).lean();
    if (!room) {
      return res.status(404).send({ success: false, message: "Room not found" });
    }
    return res.status(200).send({ success: true, room });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: "Failed to fetch room" });
  }
}