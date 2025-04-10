import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator"

export const register = async (req, res) => {
  const { password, email, name } = req.body;

  const userEmail = await User.findOne({ email });
  if (userEmail) {
    return res.status(404).send({success: false, message: "User already exist"})
  }
  if (!validator.isEmail(email)) {
    return res.status(404).send({success: false, message: "Invalid email"})
  }
  if (password.length < 8) {
    return res.status(404).send({success: false, message: "Password must be at 8 characters"})
  }
  const hash = bcrypt.hashSync(password, 10)
  if (!password || !name || !email) {
    return res.status(404).send({success: false, message: "All field required"})
  }
  try {
    const user = new User({ email, password: hash, name });
    await user.save()
    return res.status(201).send({success: true, message: "User created successfully", user})
  } catch (error) {
    console.log(error)
    return res.status(404).send({success: false, message: "Failed to create user"})
  }
}

export const login = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).send({success: false, message: "User not found"})
    }
    const isMatch = bcrypt.compareSync(password, user.password)
    if (!isMatch) {
      return res.status(404).send({success: false, message: "Invalid credentials"})
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    const { password: pass, ...otherDetails } = user._doc
    return res.status(200).send({success: true, message: "Login successfully", token, user: otherDetails})
  } catch (error) {
    console.log(error)
    return res.status(404).send({success: false, message: "Failed to login"})
  }
}

export const logout = async (req, res) => {
  try {
    res.clearCookie("token")
    return res.status(200).send({success: true, message: "Logout successfully"})
  } catch (error) {
    console.log(error)
  }
}