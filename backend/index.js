import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import { db } from "./components/database.js"
import dotenv from "dotenv"
import authRoute from "./route/auth.js"
import cookiSession from "cookie-session"
import passportSetup from "./components/passport.js"
import passport from "passport"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}))
app.use(
  cookiSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY],
    httpOnly: true,
    /*secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",*/
  }
  ))
app.use(passport.initialize());
app.use(passport.session());


app.use("/api/auth", authRoute)

app.get("/", (req, res) => {
  res.send("Api is working")
})

app.listen(8800, () => {
  console.log("Database is here");
  db();
})