import express from "express"
import { bookRoom, checkOutDetails, deleteBooking, getAllBookings, getBooking, getBookingById, makePayment } from "../controller/booking.controller.js"

const router = express.Router()

router.post("/", bookRoom)
router.get("/", getAllBookings)
router.get("/booking", getBooking)
router.delete("/:id", deleteBooking)
router.post("/order", checkOutDetails)
router.get("/:id", getBookingById)
router.post("/payment", makePayment)

export default router