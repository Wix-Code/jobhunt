import express from "express"
import { login, logout, register } from "../controller/auth.controller.js"
import passport from "passport"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

//router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: "http://localhost:3000",
    failureRedirect: '/login/failed',
  })
);

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
});

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect("http://localhost:3000");
  });
});

export default router