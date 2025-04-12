import express from "express"
import { bookRoom, deleteBooking, getAllBookings, getBooking } from "../controller/booking.controller.js"

const router = express.Router()

router.post("/", bookRoom)
router.get("/", getAllBookings)
router.get("/booking", getBooking)
router.delete("/:id", deleteBooking)

export default router