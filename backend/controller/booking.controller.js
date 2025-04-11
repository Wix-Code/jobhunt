import Booking from "../model/booking.model";
import Room from "../model/room.model";

export const bookRoom = async (req, res) => {
  const { roomId, userId, checkIn, checkOut, rooms, adults, children, breakfast } = req.body
  
  if (!userId) {
    return res.status(404).send({ success: false, message: "User not found" })
  }
  if (!roomId) {
    return res.status(404).send({ success: false, message: "Room not found" })
  }
  try {
    const room = await Room.findById(roomId)
    if (!room) {
      return res.status(404).send({ success: false, message: "Room not found" })
    }

    const nights = Math.ceil(
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = room.price * nights * rooms;
    if (breakfast) {
      totalPrice += room.breakfastPrice * nights * rooms;
    }
    
    const bookRoom = new Booking({
      roomId, userId, checkIn, checkOut, rooms, adults, children, breakfast
    })
    await bookRoom.save()
    res.status(201).send({ success: true, message: "Successfuly booked a room", bookRoom })
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Failed to book room" })
  }
}