import express from "express"
import { bookRoom } from "../controller/booking.controller.js"

const router = express.Router()
router.post("/", bookRoom)
export default router