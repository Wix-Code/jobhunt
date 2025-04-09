import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Api is working")
})

app.listen(8800, () => {
  console.log("Database is here")
})