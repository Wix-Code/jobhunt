import mongoose from "mongoose"

export const db = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    if (connect) {
      console.log("Connected to db")
    } 
  } catch (error) {
    console.log(error)
  }
}