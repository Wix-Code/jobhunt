import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import { db } from "./components/database.js"
import dotenv from "dotenv"
import authRoute from "./route/auth.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())


app.use("/api/auth", authRoute)

app.get("/", (req, res) => {
  res.send("Api is working")
})

app.listen(8800, () => {
  console.log("Database is here");
  db();
})