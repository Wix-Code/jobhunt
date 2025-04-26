import Booking from "../model/booking.model.js";
import Order from "../model/order.model.js";
import Room from "../model/room.model.js";
import { paystack } from "../components/payStack.js";

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

export const getBooking = async (req, res) => { 
  const { userId } = req.body;
  try {
    const bookings = await Booking.find({ userId }).populate("roomId").lean();
    if (!bookings) {
      return res.status(404).json({ success: false, message: "No bookings found" });
    }
    return res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
}

export const deleteBooking = async (req, res) => { 
  const { id } = req.params;
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ success: false, message: "User ID is required" });
  }
  if (!id) {
    return res.status(400).json({ success: false, message: "Booking ID is required" });
  }
  try {
    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    return res.status(200).json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to delete booking" });
  }
}

export const getAllBookings = async (req, res) => { 
  try {
    const bookings = await Booking.find({}).populate("roomId").lean();
    if (!bookings) {
      return res.status(404).json({ success: false, message: "No bookings found" });
    }
    return res.status(200).json({ success: true, bookings });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to fetch bookings" });
  }
}

export const getBookingById = async (req, res) => {
const { id } = req.params;
  try {
    const booking = await Booking.findById(id).populate("roomId").lean();
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    return res.status(200).json({ success: true, booking });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to fetch booking" });
  }
}

export const checkOutDetails = async (req, res) => { 
  const { userId, bookingId, fname, lname, phoneNo, email, address, code, amount } = req.body;
  if (!userId) {
    return res.status(400).json({ success: false, message: "User ID is required" });
  }
  if (!bookingId) {
    return res.status(400).json({ success: false, message: "Booking ID is required" });
  }
  try {
    const booking = await Booking.findById(bookingId).populate("roomId").lean();
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    const getAmount = booking.totalPrice;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let genCode = '';
    for (let i = 0; i < 10; i++) {
      genCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    //const { roomId, checkIn, checkOut, rooms, adults, children, breakfast, totalPrice } = booking;
    const order = new Order({
      bookingId,
      userId,
      fname,
      lname,
      phoneNo,
      email,
      address,
      amount: getAmount,
      code: genCode,
    });
    await order.save();

    return res.status(200).json({
      success: true,
     /* bookingDetails: {
        roomId,
        checkIn,
        checkOut,
        rooms,
        adults,
        children,
        breakfast,
        totalPrice,
        fname,
        lname,
        phoneNo,
        email,
        address,
        code: genCode,
      },*/
      order
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to post checkout details", error: error.message });
  }
}

const url = "http://localhost:3000";
export const makePayment = async (req, res) => { 
  const { userId, orderId, } = req.body;
  if (!userId) {
    return res.status(400).json({ success: false, message: "User ID is required" });
  }
  if (!orderId) {
    return res.status(400).json({ success: false, message: "Order ID is required" });
  }
  try {
    const order = await Order.findById(orderId).populate("bookingId").lean();
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    const response = await paystack.transaction.initialize({
      email: order.email,
      amount: Math.round(order.amount * 100), // Paystack requires the amount in kobo
      currency: "NGN",
      callback_url: "http://localhost:3000",
    });

    if (response.status) {
      return res.status(200).json({
        success: true,
        message: "Payment initialized successfully",
        authorization_url: response.data.authorization_url,
        response
      });
    } else {
      return res.status(400).json({ success: false, message: "Failed to initialize payment" });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to make payment" });
  }
}

export const verifyPayment = async (req, res) => { 
  const { orderId } = req.query;
  if (!orderId) {
    return res.status(400).json({ success: false, message: "Order ID is required" });
  }
  try {
    const order = await Order.findById(orderId).populate("bookingId").lean();
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    const response = await paystack.transaction.verify({ reference: order.code });

    if (response.status) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully",
        response
      });
    } else {
      return res.status(400).json({ success: false, message: "Failed to verify payment" });
    }
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to verify payment" });
  }
}

export const getOrder = async (req, res) => { 
  const { userId } = req.body;
  try {
    const orders = await Order.find({ userId }).populate("bookingId").lean();
    if (!orders) {
      return res.status(404).json({ success: false, message: "No orders found" });
    }
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
}