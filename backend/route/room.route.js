import express from "express";
import { addRoom, getAllRooms, getRoomById } from "../controller/room.controller.js";

const router = express.Router()

router.post("/", addRoom)
router.get("/", getAllRooms)
router.get("/:id", getRoomById)
export default router