const express = require("express");
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
//const bycrpt = require("bcryptjs");
const { auth } = require("../Middleware/auth");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
   const { username, email, password } = req.body;
   try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
         return res.status(400).json({ message: "Email već u upotrebi." });
      }
      const user = await User.create({ username, email, password });
      const token = jwt.sign(
         { id: user._id, role: user.role },
         process.env.JWT_WEB_TOKEN,
         {
            expiresIn: "30d",
         }
      );
      res.status(201).json({ token });
   } catch (error) {
      res.status(500).json({ message: "Server error." });
   }
});

//Login
router.post("/login", async (req, res) => {
   const { email, password } = req.body;
   try {
      const user = await User.findOne({ email });
      if (user && (await user.matchPassword(password))) {
         const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_WEB_TOKEN,
            {
               expiresIn: "30d",
            }
         );
         res.json({ token });
      } else {
         res.status(401).json({ message: "Podaci nisu točni." });
      }
   } catch (error) {
      res.status(500).json({ message: "Server error." });
   }
});

router.get("/auth", auth, (req, res) => {
   res.json({ message: "Auth ruta", user: req.user });
});

module.exports = router;
