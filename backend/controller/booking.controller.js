import Booking from "../model/booking.model.js";
import Room from "../model/room.model.js";

export const bookRoom = async (req, res) => {
  const {
    roomId,
    userId,
    checkIn,
    checkOut,
    rooms,
    adults,
    children,
    breakfast,
    
  } = req.body;

  // Basic required fields validation
  if (!userId) {
    return res.status(400).json({ success: false, message: "User ID is required" });
  }

  if (!roomId) {
    return res.status(400).json({ success: false, message: "Room ID is required" });
  }

  try {
    console.log("Incoming booking request:", req.body);

    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ success: false, message: "Room not found" });
    }

    // Calculate number of nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    if (isNaN(nights) || nights <= 0) {
      return res.status(400).json({ success: false, message: "Invalid check-in/check-out dates" });
    }

    // Calculate total price
    let totalPrice = room.price * nights * rooms;
    if (breakfast) {
      totalPrice += room.breakfastPrice * nights * rooms;
    }

    const booking = new Booking({
      roomId,
      userId,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      rooms,
      adults,
      children,
      breakfast,
      totalPrice,
    });

    await booking.save();

    return res.status(201).json({
      success: true,
      message: "Successfully booked a room",
      booking,
    });
  } catch (error) {
    console.log("Booking Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to book room",
      error: error.message, // Optional: helpful during dev
    });
  }
};